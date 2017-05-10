import { IndicatorInfo } from "./indicator-models";
import * as Enums from "./enums";
import { QuoteInfo } from "./company-models";

export class ChartLayoutInfo {
    layoutId: number;
    title: string;
    description: string;
    deleted: boolean;
    default: boolean;
    period: Enums.QuotePeriod;
    plots: ChartPlotInfo[];

    constructor() {
        this.layoutId = 0;
        this.title = "";
        this.description = "";
        this.deleted = false;
        this.default = false;
        this.period = Enums.QuotePeriod.Daily;
        this.plots = [];
    }
}

export class ChartPlotInfo {
    title: string;
    layoutId: number;
    plotId: number;
    orderId: number;
    height: number;
    indicators: ChartIndicatorInfo[];

    constructor() {
        this.plotId = 0;
        this.layoutId = 0;
        this.orderId = 0;
        this.height = 0;
        this.title = "";
        this.indicators = [];
    }
}
 
export class ChartIndicatorInfo {

    id: number;
    plotId: number;
    indicatorId: number;
    indicator: IndicatorInfo;
    name: string;
    lineColor: string;

    constructor() {
        this.id = 0;
        this.plotId = 0;
        this.indicator = null;
        this.name = "";
        this.lineColor = "";
    }

}

export class ChartLayoutData {
    company: CompanyHeaderInfo;
    periods: ChartLayoutPeriodData[];

    constructor() {
        this.company = new CompanyHeaderInfo();
        this.periods = [];
    }
}


export class CompanyHeaderInfo {
    ticker: string;
    name: string;

    constructor() {
        this.name = "";
        this.ticker = "";
    }
}


export class ChartLayoutPeriodData {
    period: Enums.QuotePeriod;

    quotes: QuoteInfo[];
    plots : ChartPlotData[];

    constructor() {
        this.period = Enums.QuotePeriod.Daily;
        this.quotes = [];
        this.plots = [];
    }

}

export class ChartPlotData {
    plotId: number;
    orderId: number;
    height: number;
    indicators: ChartIndicatorData[];

    constructor() {
        this.plotId = 0;
        this.orderId = 0;
        this.height = 0;
        this.indicators = [];
    }
}

export class ChartIndicatorData extends ChartIndicatorInfo {
    data: IndicatorData[];


    constructor() {
        super();
        this.data = [];
    }
}

export class IndicatorData {
    indicatorId: number;
    name: string;
    data: IndicatorValue[];

    constructor() {
        this.indicatorId = 0;
        this.name = "";
        this.data = [];
    }
}

export class IndicatorValue {
    date: Date;
    values: IndicatorValueItem[];

    constructor() {
        this.date = null;
        this.values = [];
    }
}

export class IndicatorValueItem {
    kind: number;
    name: string;
    value: number;
}