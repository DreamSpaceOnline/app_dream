import {IndicatorInfo} from "./indicator-models";
import * as Enums from "./enums";

export class LayoutInfo {
    layoutId: number;
    title: string;
    description: string;
    deleted: boolean;
    default: boolean;
    period: Enums.QuotePeriod;
    indicators: LayoutIndicatorInfo[];

    constructor() {
        this.layoutId = 0;
        this.title = "";
        this.description = "";
        this.deleted = false;
        this.default = false;
        this.period = Enums.QuotePeriod.Daily;
        this.indicators = [];
    }
}
 
export class LayoutIndicatorInfo {

    id: number;
    layoutId: number;
    indicatorId: number;
    orderId: number;
    indicator: IndicatorInfo;
    name: string;
    lineColor: string;

    constructor() {
        this.id = 0;
        this.layoutId = 0;
        this.orderId = 0;
        this.indicator = null;
        this.name = "";
        this.lineColor = "";
    }

}
