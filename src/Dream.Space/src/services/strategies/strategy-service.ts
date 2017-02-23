import { autoinject } from "aurelia-framework";
import { HttpClient, json } from 'aurelia-fetch-client';
import {StrategySummary, StrategyInfo, StrategyEntity } from "./strategy-models";

@autoinject
export class StrategyService {


    constructor(private http: HttpClient) {
    }


    async getSummaries() : Promise<StrategySummary[]> {
        const response = await this.http.fetch('strategy/getSummaries', { method: 'get' });
        return await response.json();
    }

    async getByUrl(url: string) : Promise<StrategyInfo> {
        const response = await this.http.fetch('strategy/getByUrl/' + url, { method: 'get' });
        return await response.json();
    }

    async getSummaryByUrl(url: string) : Promise<StrategySummary> {
        const response = await this.http.fetch('strategy/getSummaryByUrl/' + url, { method: 'get' });
        return await response.json();
    }

    async getById(id: number): Promise<StrategyEntity> {
        const response = await this.http.fetch('strategy/get/' + id, { method: 'get' });
        return await response.json();
    }

    async update(strategy: StrategyInfo): Promise<StrategyInfo> {
        const response = await this.http.fetch('strategy', { method: 'post', body: json(strategy) });
        return await response.json();
    }


    async deleteStrategy(strategyId: number) {
        await this.http.fetch('strategy/' + strategyId, { method: 'delete' });
    }

}

