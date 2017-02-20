export interface IndicatorCore {
    name: string;
    id: number;
    period: number;
}

export interface IndicatorInfo {
    indicatorId: number;
    name: string;
    description: string;
    period: number;
    jsonParams: string;
    lastUpdated: Date;
    deleted: boolean;
    chartPlotNumber: number;
    chartColor: string;
}