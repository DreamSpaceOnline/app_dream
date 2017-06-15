import { bindable } from "aurelia-framework";
import { QuotePeriod, ChartType, QuotesModel, IndicatorValueItem } from "../../../services/services-generated";

export class ChartLayout {
    @bindable data: any = null;
    isAttached = false;

    attached() {
        this.isAttached = true;
    }


    dataChanged() {
        if (this.isAttached ) {
            this.renderChart();
        }
    }


    renderChart() {
        if (this.data.periods.length === 0) return;

        this.data.periods.forEach(period => {
            $(`#container-${period.period}`).empty();

            const chart = anychart.stock();
            this.renderPeriod(chart, period);

            chart.container(`container-${period.period}`);
            chart.draw();
        });
    }


    renderPeriod(chart: anychart.charts.Stock, period: any) {
        if (period.quotes.length === 0 || period.plots.length === 0) return;

        const zeroPlot = this.attachQuotes(chart, period.quotes, period.period);

        let plotNumber = 0;

        period.plots.forEach(p => {
            let plot: anychart.core.stock.Plot;

            if (plotNumber === 0) {
                plot = zeroPlot;
            } else {
                plot = chart.plot(plotNumber);
            }

            this.attachChartPlot(chart, p, plot);

            if (p.height > 0) {
                plot.height(p.height);
            }

            plotNumber++;
        });

    }


    attachQuotes(chart: anychart.charts.Stock, quotes: QuotesModel[], period: QuotePeriod): anychart.core.stock.Plot {
        if (chart == null || !chart) {
            return null; }

        const tableUp = anychart.data.table();
        const tableDown = anychart.data.table();
        const tableNeutral = anychart.data.table();

        quotes.forEach(item => {
            const row = [[item.date, item.open, item.high, item.low, item.close, item.volume]];
            if (item.impulse === 0) {
                tableNeutral.addData(row);
            }
            if (item.impulse === 1) {
                tableUp.addData(row);
            }
            if (item.impulse === -1) {
                tableDown.addData(row);
            }
        });

        const mappingUp = this.createQuotesMappings(tableUp);
        const mappingDown = this.createQuotesMappings(tableDown);
        const mappingNeutral = this.createQuotesMappings(tableNeutral);
    
        const seriesUp = chart.plot(0).ohlc(mappingUp);
        seriesUp.fallingStroke("green");
        seriesUp.risingStroke("green");

        const seriesDown = chart.plot(0).ohlc(mappingDown);
        seriesDown.fallingStroke("red");
        seriesDown.risingStroke("red");

        const serieNeutral = chart.plot(0).ohlc(mappingNeutral);
        serieNeutral.fallingStroke("teal");
        serieNeutral.risingStroke("teal");

        const seriesName = this.data.company.name + " (" + period + ")";
        serieNeutral.name(seriesName);

        const legend = serieNeutral.legendItem();
        legend.text(seriesName);

        const plot = chart.plot(0);
        plot.grid(0).enabled(true);
        plot.grid(0).stroke("#EEE");

        return plot;
    }


    createQuotesMappings(table: anychart.data.Table): anychart.data.TableMapping {
        const mapping = table.mapAs();
        mapping.addField("open", 1, anychart.enums.AggregationType.FIRST);
        mapping.addField("high", 2, anychart.enums.AggregationType.MAX);
        mapping.addField("low", 3, anychart.enums.AggregationType.MIN);
        mapping.addField("close", 4, anychart.enums.AggregationType.LAST);

        return mapping;
    }


    attachChartPlot(chart: anychart.charts.Stock, plotData: any, plotChart: anychart.core.stock.Plot) {
        if (chart == null || !chart || plotData == null || !plotData || plotChart == null || !plotChart) {
            return;
        }


        plotData.indicators.forEach(indicator => {

            const table = anychart.data.table(0);

            indicator.data.forEach(value => {

                const row = [];
                row.push(value.date);

                value.values.forEach((item) => {
                    row.push(item.value);
                });

                table.addData([row]);
            });

            indicator.data[0].values.forEach(item => {
                const mapping = table.mapAs();
                mapping.addField("value", indicator.data[0].values.indexOf(item) + 1);

                this.drawIndicator(plotChart, mapping, item);
            });

        });
    }


    drawIndicator(plotChart: anychart.core.stock.Plot, mapping: anychart.data.TableMapping, value: IndicatorValueItem) {

        switch (value.chartType) {
            case ChartType.Column:
                var column = plotChart.column(mapping);
                column.name(value.name);

                if (value.lineColor !== "") {
                    column.stroke(value.lineColor);
                }

                break;
        default: // "line""
                var line = plotChart.line(mapping);
                line.name(value.name);

                if (value.lineColor !== "") {
                    line.stroke(value.lineColor);
                }

                break;
        }

    }

}