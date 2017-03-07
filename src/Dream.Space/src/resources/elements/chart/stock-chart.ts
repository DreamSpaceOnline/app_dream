import { autoinject, bindable } from "aurelia-framework";
import { Subscription } from "aurelia-event-aggregator";
import {PlaygroundViewModel} from "../../../common/types/playground-models";
import {EventEmitter} from "../../../infrastructure/event-emitter";

@autoinject
export class StockChart {
    @bindable model: PlaygroundViewModel;
    subscriptions: Subscription[] = [];

    constructor(private eventEmitter: EventEmitter) {
    }

    modelChanged() {
        if (this.model && this.model.company) {
            this.drawChart();
        }
    }

    attached() {
        this.subscriptions.push(
            this.eventEmitter.subscribe("ChartData", data => this.loadChartData(data)));

    }

    detached() {
        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach(subscription => {
                subscription.dispose();
            });
        }
    }


    loadChartData(data: PlaygroundViewModel) {
        console.log(data.company.name);
    }


    drawChart() {
        this.model.periods.forEach(period => {
            const plotNumber = 0;
            const chart = anychart.stock();
            period.table = anychart.data.table();

            period.quotes.forEach(item => {
                const row = [[item.date, item.open, item.high, item.low, item.close, item.volume]];
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
                indicator.table = anychart.data.table(0);

                indicator.indicatorValues.forEach(value => {
                    const row = [[value.date, value.value]];
                    indicator.table.addData(row);
                });

                const indicatorMapping = indicator.table.mapAs();
                indicatorMapping.addField("value", 1);   
                const indicatorSeries = indicatorPlot.line(indicatorMapping);
                indicatorSeries.name(indicator.name);
            });

            const volumePlot = chart.plot(1 + plotNumber);
            const volumeMapping = period.table.mapAs();
            volumeMapping.addField("value", 5);   

            volumePlot.column(volumeMapping).name("Volume");
            volumePlot.height("30%");

            chart.title(seriesName);
            chart.container(`container-${period.name}`);
            chart.draw();
        });

    }
}