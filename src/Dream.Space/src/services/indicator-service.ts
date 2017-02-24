import { autoinject } from "aurelia-framework";
import { HttpClient, json } from 'aurelia-fetch-client';
import {IndicatorCore, IndicatorInfo } from "../common/types/indicator-models";
import {QuotePeriod} from "../common/types/enums";

@autoinject
export class IndicatorService {

    constructor(private http: HttpClient) {
    }

    async getNames(): Promise<IndicatorCore[]> {

        let response = await this.http.fetch('indicator/all',
        {
            method: 'get'
        });

        return await response.json();
    }

    async getIndicator(id: number) : Promise<IndicatorInfo> {

        let response = await this.http.fetch('indicator/' + id, { method: 'get' });
        return await response.json();
    }

    async getIndicatorsForPeriod(period: QuotePeriod): Promise<IndicatorInfo[]> {

        let response = await this.http.fetch('indicator/' + period + '/all', { method: 'get' });
        return await response.json();
    }

    async deleteIndicator(id: number) {
        await this.http.fetch("indicator/" + id, { method: 'delete' });
    }

    async saveIndicator(indicator: IndicatorInfo): Promise<IndicatorInfo>{
        let response = await this.http.fetch("indicator",
        {
            method: 'post',
            body: json(indicator)
        });
        return await response.json();
    }

}


