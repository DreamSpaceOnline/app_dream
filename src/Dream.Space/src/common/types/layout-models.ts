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
}

export class LayoutIndicatorInfo {
    id: number;
    layoutId: number;
    indicatorId: number;
    indicator: IndicatorInfo;
    name: string;
}
