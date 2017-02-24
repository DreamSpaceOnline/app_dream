import { QuotePeriod } from "./enums";

export interface IndicatorCore {
    name: string;
    id: number;
    period: QuotePeriod;
}

export class IndicatorInfo {
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

