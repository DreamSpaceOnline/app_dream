export interface IndicatorCore {
    name: string;
    id: number;
    period: QuotePeriod;
}

export interface IndicatorInfo {
    indicatorId: number;
    name: string;
    description: string;
    period: QuotePeriod;
    jsonParams: string;
    lastUpdated: Date;
    deleted: boolean;
    chartPlotNumber: number;
    chartColor: string;
}

export enum QuotePeriod {
    Daily = 0,
    Weekly = 1
}