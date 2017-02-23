export interface CompanyInfo extends CompanyHeader {

    lastCalculated: Date;
    nextReportDate: Date;
    historyQuotes: QuoteInfo[];
    updateSuccessful: boolean;
    updateError: string;
    calculatedSuccessful: boolean;
    calculatedError: string;
}

export interface CompanyHeader {

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

export interface QuoteInfo {

}