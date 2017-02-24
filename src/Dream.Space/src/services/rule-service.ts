import { autoinject } from "aurelia-framework";
import { HttpClient, json } from "aurelia-fetch-client";
import { RuleInfo } from "../common/types/rule-models";

@autoinject
export class RuleService {

    constructor(private http: HttpClient) {
    }

    async getRule(id: number) : Promise<RuleInfo> {

        const response = await this.http.fetch('rule/' + id, { method: 'get' });
        return await response.json();
    }

    async getRulesForPeriod(period: number) : Promise<RuleInfo[]> {

        const response = await this.http.fetch('rule/' + period + '/all', { method: 'get' });
        return await response.json();
    }

    async deleteRule(id: number) {
        await this.http.fetch("rule/" + id, { method: 'delete' });
    }

    async saveRule(rule: RuleInfo): Promise<RuleInfo>  {
        const response = await this.http.fetch("rule", { method: 'post', body: json(rule) });
        return await response.json();
    }

}

