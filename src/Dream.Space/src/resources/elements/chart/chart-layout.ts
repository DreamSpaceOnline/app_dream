import { bindable } from "aurelia-framework";
import {ChartLayoutData, ChartLayoutPeriodData, ChartPlotData } from "../../../common/types/layout-models";
import {QuoteInfo} from "../../../common/types/company-models";

export class ChartLayout {
    @bindable data: ChartLayoutData = null;
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

            this.renderPeriod(period);
        });
    }


    renderPeriod(period: ChartLayoutPeriodData) {
        if (period.quotes.length === 0 || period.plots.length === 0) return;

        const chart = anychart.stock();

        this.attachQuotes(chart, period.quotes);

        period.plots.forEach(plot => {
            this.attachChartPlot(chart, plot);
        });


        chart.container(`container-${period.period}`);
        chart.draw();
    }

    attachQuotes(chart: anychart.charts.Stock,  quotes: QuoteInfo[]) {
        if (chart != null && quotes != null) { }


    }

    attachChartPlot(chart: anychart.charts.Stock, plot: ChartPlotData) {
        if (chart != null && plot != null) { }


    }
}