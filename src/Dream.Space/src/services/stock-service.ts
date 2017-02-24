import { autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";

@autoinject
export class StockService {

    constructor(private http: HttpClient) {
    }

    async updateQuotes(ticker: string) {
        await this.http.fetch('stock/' + ticker + '/update-quotes', { method: 'put' });
    }
}