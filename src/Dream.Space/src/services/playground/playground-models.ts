﻿import * as Companymodels from "../company/company-models";

export interface PlaygroundInfo {
    companyInfo: { name: string };
    periods: ChartInfo[];
    ruleSets: {}[];
}

export interface ChartInfo {
    id: number;
    name: string;
    quotes: Companymodels.QuoteInfo[];
    update: ChartUpdateInfo;
    indicators: ChartIndicatorInfo[];
}

export interface ChartUpdateInfo {
    quotes: Companymodels.QuoteInfo[];
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

export enum ChartUpdateMode {
    Reset = 0,
    Insert = 1,
    Append = 2
}

export type ChartUpdateModeName = "Reset" | "Insert" | "Append";
export type ChartTypeName = "line" | "ohlc" | "candlestick" | "Column" | "area"