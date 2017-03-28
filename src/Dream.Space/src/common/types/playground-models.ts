import { ChartUpdateMode, ChartUpdateModeName, ChartTypeName} from "./enums";
import { QuoteInfo } from "./company-models";


export class PlaygroundRuleInfo {
    ruleSetId: number;
    ruleId: number;
    ruleName: string;
    ruleSetName: string;
    firstValue: number;
    secondValue: number;
    valid: boolean;
}

export class PlaygroundRuleSetInfo {
    name: string;
    progress: number;
    ruleSetId: number;
    rules: PlaygroundRuleInfo[];

    constructor() {
        this.rules = [];
    }
}

export class PlaygroundInfo {
    company: { name: string };
    periods: ChartInfo[];
    ruleSets: PlaygroundRuleSetInfo[];

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
    table?: anychart.data.Table;
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
    indicatorValues: IndicatorValue[];
    table: anychart.data.Table;
}

export interface IndicatorValue {
    date: Date;
    values: IndicatorValueItem[];
}

export interface IndicatorValueItem {
    kind: number;
    name: string;
    value: number;
}