import { autoinject, bindable } from "aurelia-framework";
import { Subscription } from "aurelia-event-aggregator";
import { PlaygroundViewModel, IndicatorValueItem} from "../../../common/types/playground-models";
import {EventEmitter} from "../../../infrastructure/event-emitter";

@autoinject
export class StockChart {
    @bindable model: PlaygroundViewModel;
    subscriptions: Subscription[] = [];
    isAttached = false;
    chart: anychart.charts.Stock;

    constructor(private eventEmitter: EventEmitter) {
    }

    modelChanged() {
        if (this.model && this.model.company && this.isAttached) {
            $("#container-Weekly").empty();
            $("#container-Daily").empty();

            this.drawChart();
        }
    }

    attached() {
        this.isAttached = true; 

        if (this.model && this.model.company) {
            this.drawChart();
        }

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
            this.chart = anychart.stock();
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

            const series = this.chart.plot(plotNumber).ohlc(mapping);
            const seriesName = this.model.company.name + " (" + period.name + ")";
            series.name(seriesName);

            const legend = series.legendItem();
            legend.text(seriesName);

            this.chart.plot(plotNumber).grid(0).enabled(true);
            this.chart.plot(plotNumber).grid(0).stroke("#EEE");

            period.indicators.forEach(indicator => {
                const indicatorPlot = this.chart.plot(plotNumber);
                indicator.table = anychart.data.table(0);

                let fieldValues: IndicatorValueItem[] = null;
                indicator.indicatorValues.forEach(value => {

                    const row = [];
                    row.push(value.date);

                    value.values.forEach((item) => {
                        row.push(item.value);
                    });

                    if (!fieldValues) {
                        fieldValues = value.values;
                    }                    
                    indicator.table.addData([row]);
                });

                const indicatorMapping = indicator.table.mapAs();
                let index = 0;
                fieldValues.forEach(item => {
                    index++;
                    indicatorMapping.addField(item.name, index);   
                });

                const indicatorSeries = indicatorPlot.line(indicatorMapping);
                indicatorSeries.name(indicator.name);
            });

            const volumePlot = this.chart.plot(1 + plotNumber);
            const volumeMapping = period.table.mapAs();
            volumeMapping.addField("value", 5);   

            volumePlot.column(volumeMapping).name("Volume");
            volumePlot.height("30%");

            this.chart.title(seriesName);
            this.chart.container(`container-${period.name}`);
            this.chart.draw();
        });

    }

}