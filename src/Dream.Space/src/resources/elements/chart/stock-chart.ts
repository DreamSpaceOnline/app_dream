import { autoinject, bindable } from "aurelia-framework";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import {PlaygroundViewModel} from "../../../common/types/playground-models";

@autoinject
export class StockChart {
    @bindable model: PlaygroundViewModel;
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
            period.table = anychart.data.table();

            period.quotes.forEach(item => {
                const row = [[item.date, item.open, item.high, item.low, item.close]];
                period.table.addData(row);
            });

            const mapping = period.table.mapAs();
            mapping.addField("open", 1, anychart.enums.AggregationType.FIRST);
            mapping.addField("high", 2, anychart.enums.AggregationType.MAX);
            mapping.addField("low", 3, anychart.enums.AggregationType.MIN);
            mapping.addField("close", 4, anychart.enums.AggregationType.LAST);

            const series = chart.plot(plotNumber).ohlc(mapping);
            const seriesName = this.model.company.name + " (" + period.name + ")";
            series.name(seriesName);

            const legend = series.legendItem();
            legend.text(seriesName);

            chart.plot(plotNumber).grid(0).enabled(true);
            chart.plot(plotNumber).grid(0).stroke("#EEE");

            period.indicators.forEach(indicator => {
                const indicatorPlot = chart.plot(plotNumber);
                const indicatorData = anychart.data.table(0);
                indicatorData.addData(indicator.values);
                const indicatorMapping = indicatorData.mapAs();
                indicatorMapping.addField("value", 1);   
                const indicatorSeries = indicatorPlot.line(indicatorMapping);
                indicatorSeries.name(indicator.name);
            });

            const volumePlot = chart.plot(1 + plotNumber);
            const volumeMapping = period.table.mapAs();
            volumeMapping.addField("value", 1);   

            volumePlot.column(volumeMapping).name("Volume");
            volumePlot.height("30%");

            chart.title(seriesName);
            chart.container(`container-${period.name}`);
            chart.draw();
        });

    }
}