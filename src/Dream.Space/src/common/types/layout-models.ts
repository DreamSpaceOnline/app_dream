import {IndicatorInfo} from "./indicator-models";
import * as Enums from "./enums";

export class LayoutInfo {
    layoutId: number;
    title: string;
    deleted: boolean;
    default: boolean;
    period: Enums.QuotePeriod;

    iIndicators: IndicatorInfo[];
}

