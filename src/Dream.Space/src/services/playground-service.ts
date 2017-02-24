import { autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { PlaygroundInfo } from "../common/types/playground-models";

@autoinject
export class PlaygroundService {


    constructor(private http: HttpClient) {
    }


    async loadPlayground(ticker, strategyId, bars): Promise<PlaygroundInfo> {
        const response = await this.http.fetch('playground/' + ticker + '/' + strategyId + '/' + bars,
            { method: 'get' });

        return await response.json();
    }

    async loadNext(ticker, strategyId, bars, step): Promise<PlaygroundInfo> {

        const response = await this.http.fetch('playground/' + ticker + '/' + strategyId + '/' + bars + '/next/' + step,
            { method: 'get' });

        return await response.json();
    }

    async loadPrev(ticker, strategyId, bars, step): Promise<PlaygroundInfo> {

        const response = await this.http.fetch('playground/' + ticker + '/' + strategyId + '/' + bars + '/prev/' + step,
            { method: 'get' });

        return await response.json();
    }

}



