import { autoinject } from "aurelia-framework";
import { HttpClient, json } from "aurelia-fetch-client";
import {CompanyInfo, CompanyHeader } from "../common/types/company-models";

@autoinject
export class CompanyService {

    constructor(private http: HttpClient) {
    }

    async getCompany(ticker: string) : Promise<CompanyInfo> {

        const response = await this.http.fetch("company/" + ticker, { method: "get" });
        return await response.json();
    }

    async searchCompanies(ticker: string, maxCount: number): Promise<CompanyHeader[]> {
        const model = {
            ticker: ticker,
            maxCount: maxCount
        };

        const response = await this.http.fetch('company/search', { method: 'post', body: json(model) });
        return await response.json();
    }

}

