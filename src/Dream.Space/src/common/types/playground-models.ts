import { ChartUpdateMode, ChartUpdateModeName, ChartTypeName} from "./enums";
import { QuoteInfo } from "./company-models";

export interface PlaygroundInfo {
    companyInfo: { name: string };
    periods: ChartInfo[];
    ruleSets: {}[];
}

export interface ChartInfo {
    id: number;
    name: string;
    quotes: QuoteInfo[];
    update: ChartUpdateInfo;
    indicators: ChartIndicatorInfo[];
}

export interface ChartUpdateInfo {
    quotes: QuoteInfo[];
    modeType: ChartUpdateMode;
    mode: ChartUpdateModeName;
    bars: number;
}

export interface ChartIndicatorInfo {
    id: number;
    chartType: ChartTypeName;
    name: string;
    sharedPlot: number;
    values: IndicatorValue[];
}

export interface IndicatorValue {
    date: Date;
    value: number;
}

