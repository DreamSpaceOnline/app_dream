import { autoinject, bindable } from "aurelia-framework";
import * as moment from "moment";
import { CompanyModel, CompaniesApiClient, StockApiClient } from "../../../../services/services-generated";

@autoinject()
export class CompanyDetails {
    @bindable ticker: string;
    company: CompanyModel;
    isLoading: boolean;

    constructor(
        private readonly companyService: CompaniesApiClient,
        private readonly stockService: StockApiClient) {
        
    }

    async tickerChanged() {
        this.company = null;
        this.isLoading = true;

        if (this.ticker && this.ticker.length > 0) {
            try {
                this.company = await this.companyService.getCompany(this.ticker);
            } catch (e) {

            } 
        }
        this.isLoading = false;
    }

    async updateCompany() {

        if (!this.company) {
            return;
        }

        this.isLoading = true;

        try {
            await this.stockService.updateQuotes(this.company.ticker);
            this.company = await this.companyService.getCompany(this.company.ticker);
        } catch (e) {

        }

        this.isLoading = false;
    }

    formatDate(date: Date) {
        const date1 = moment(date);
        const date2 = moment(new Date());

        const diff = date2.diff(date1);
        const duration = moment.duration(diff);
        const days = duration.asDays();

        return Math.round(days) + " days ago";
    }
}