import { autoinject } from "aurelia-framework";
import { HttpClient, json } from 'aurelia-fetch-client';
import {IndicatorCore, IndicatorInfo } from "./indicator-models";

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

    async getIndicator(id) : Promise<IndicatorInfo> {

        let response = await this.http.fetch('indicator/' + id, { method: 'get' });
        return await response.json();
    }

    async getIndicatorsForPeriod(period): Promise<IndicatorInfo[]> {

        let response = await this.http.fetch('indicator/' + period + '/all', { method: 'get' });
        return await response.json();
    }

    async deleteIndicator(id) {
        await this.http.fetch("indicator/" + id, { method: 'delete' });
    }

    async saveIndicator(indicator): Promise<IndicatorInfo>{
        let response = await this.http.fetch("indicator",
        {
            method: 'post',
            body: json(indicator)
        });
        return await response.json();
    }

}


