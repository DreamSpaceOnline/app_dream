export class CompanyHeader {

    ticker: string;
    name: string;
    marketCap: number;
    sector: string;
    industry: string;
    summaryUrl: string;
    lastUpdated: Date;
    volume: number;
    price: number;
    highestPrice52: number;
    lowestPrice52: number;
    chaosPercentage: number;
    updateSuccessful: boolean;
    filtered: boolean;
}

export class QuoteInfo {
    open: number;
    close: number;
    high: number;
    low: number;
    value: number;
    date: Date;
}

export class CompanyInfo extends CompanyHeader {

    lastCalculated: Date;
    nextReportDate: Date;
    historyQuotes: QuoteInfo[];
    updateSuccessful: boolean;
    updateError: string;
    calculatedSuccessful: boolean;
    calculatedError: string;

    constructor() {
        super();

        this.historyQuotes = [];
    }
}

export class CompanyViewModel extends CompanyInfo {
    show?: boolean;

    constructor() {
        super();

        this.show = false;
    }
}

