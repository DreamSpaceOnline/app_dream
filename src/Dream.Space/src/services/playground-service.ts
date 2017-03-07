import { autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { PlaygroundInfo } from "../common/types/playground-models";

@autoinject
export class PlaygroundService {


    constructor(private http: HttpClient) {
    }


    async loadPlayground(ticker: string, strategyId: number, bars: number, date: number): Promise<PlaygroundInfo> {
        const response = await this.http.fetch(`playground/${ticker}/${strategyId}/${bars}/${date}`,
            { method: "get" });

        return await response.json();
    }

    async loadNext(ticker: string, strategyId: number): Promise<PlaygroundInfo> {

        const response = await this.http.fetch(`playground/${ticker}/${strategyId}/next`,
            { method: "get" });

        return await response.json();
    }

    async loadPrev(ticker: string, strategyId: number): Promise<PlaygroundInfo> {

        const response = await this.http.fetch(`playground/${ticker}/${strategyId}/prev`,
            { method: "get" });

        return await response.json();
    }

}



