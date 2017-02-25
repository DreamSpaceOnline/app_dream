const anychart = require("../../../../node_modules/npm-anystock");
import { autoinject, bindable } from "aurelia-framework";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";

@autoinject
export class StockChart {
    @bindable model;
    subscriptions: Subscription[] = [];

    constructor(private eventAggregator: EventAggregator) {
    }

    modelChanged() {
    }

    attached() {
        this.subscriptions.push(
            this.eventAggregator.subscribe("StrategyPlayground.loadPrev", data => this.loadPrev(data)));

        this.subscriptions.push(
            this.eventAggregator.subscribe("StrategyPlayground.loadNext", data => this.loadNext(data)));

        if (this.model && this.model.company) {
            this.drawChart();
        }
    }

    detached() {
        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach(subscription => {
                subscription.dispose();
            });
        }
    }

    playgroundData;

    loadPrev(data) {
        this.playgroundData = data;
    }

    loadNext(data) {
        this.playgroundData = data;
        //data.periods.forEach(function(period) {
        //    table.addData(period.quotes);
        //    table.remove();
        //});
    }


    drawChart() {
        this.model.periods.forEach(period => {
            const plotNumber = 0;
            const chart = anychart.stock();
            const table = anychart.data.table("date");
            table.addData(period.quotes);

            const mapping = table.mapAs({ 'open': "open", 'high': "high", 'low': "low", 'close': "close" });
            const series = chart.plot(plotNumber).ohlc(mapping);
            const seriesName = this.model.company.name + ' (' + period.name + ')';
            series.name(seriesName);
            series.id(period.name);

            const legend = series.legendItem();
            legend.text(seriesName);

            chart.plot(plotNumber).grid(0).enabled(true);
            chart.plot(plotNumber).grid(0).stroke("#EEE");

            period.indicators.forEach(indicator => {
                const indicatorPlot = chart.plot(plotNumber);
                const indicatorData = anychart.data.table("date");
                indicatorData.addData(indicator.values);
                const indicatorMapping = indicatorData.mapAs({ "value": "value" });
                const indicatorSeries = indicatorPlot.line(indicatorMapping);
                indicatorSeries.name(indicator.name);
            });

            const volumePlot = chart.plot(1 + plotNumber);
            const volumeMapping = table.mapAs({ "value": "volume" });

            volumePlot.column(volumeMapping).name("Volume");
            volumePlot.height("30%");

            chart.title(seriesName);
            chart.container(`container-${period.name}`);
            chart.draw();
        });

    }
}