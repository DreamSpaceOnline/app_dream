import { ChartUpdateMode, ChartUpdateModeName, ChartTypeName} from "./enums";
import { QuoteInfo } from "./company-models";

export class PlaygroundInfo {
    company: { name: string };
    periods: ChartInfo[];
    ruleSets: {}[];

    constructor() {
        this.periods = [];
        this.ruleSets = [];
    }
}

export class PlaygroundViewModel extends PlaygroundInfo {
    constructor() {
        super();
    }
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

