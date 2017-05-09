import {IndicatorInfo} from "./indicator-models";
import * as Enums from "./enums";

export class LayoutInfo {
    layoutId: number;
    title: string;
    description: string;
    deleted: boolean;
    default: boolean;
    period: Enums.QuotePeriod;
    plots: ChartPlotInfo[];

    constructor() {
        this.layoutId = 0;
        this.title = "";
        this.description = "";
        this.deleted = false;
        this.default = false;
        this.period = Enums.QuotePeriod.Daily;
        this.plots = [];
    }
}

export class ChartPlotInfo {
    id: number;
    title: string;
    layoutId: number;
    plotId: number;
    orderId: number;
    height: number;
    indicators: ChartIndicatorInfo[];

    constructor() {
        this.id = 0;
        this.plotId = 0;
        this.layoutId = 0;
        this.orderId = 0;
        this.height = 0;
        this.title = "";
        this.indicators = [];
    }
}
 
export class ChartIndicatorInfo {

    id: number;
    plotId: number;
    indicatorId: number;
    orderId: number;
    indicator: IndicatorInfo;
    name: string;
    lineColor: string;

    constructor() {
        this.id = 0;
        this.plotId = 0;
        this.orderId = 0;
        this.indicator = null;
        this.name = "";
        this.lineColor = "";
    }

}
