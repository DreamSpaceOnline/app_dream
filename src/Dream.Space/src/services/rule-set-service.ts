import { autoinject } from "aurelia-framework";
import { HttpClient, json } from "aurelia-fetch-client";
import { RuleSetInfo, StrategyRuleSetInfo } from "../common/types/rule-models";
import { QuotePeriod } from "../common/types/enums";

@autoinject
export class RuleSetService {

    constructor(private http: HttpClient) {
    }

    async getRuleSet(id: number) :Promise<RuleSetInfo> {
        const response = await this.http.fetch('ruleset/' + id, { method: 'get' });
        return await response.json();
    }

     async getRuleSetsForPeriod(period: QuotePeriod): Promise<RuleSetInfo[]> {
         const response = await this.http.fetch('ruleset/' + period + '/all', { method: 'get' });
         return await response.json();
    }

     async getRuleSetsForStrategy(strategyId: number): Promise<StrategyRuleSetInfo[]> {
         const response = await this.http.fetch('ruleset/strategy/' + strategyId, { method: 'get' });
         return await response.json();
    }

     async saveRuleSetsForStrategy(strategyId: number, rulesets: StrategyRuleSetInfo[]): Promise<StrategyRuleSetInfo[]> {
         const response = await this.http.fetch('ruleset/strategy/' + strategyId, { method: 'post', body: json(rulesets) });
         return await response.json();
    }

    async deleteRuleSet(id: number) {
        await this.http.fetch("ruleset/" + id, { method: 'delete' });
    }

    async saveRuleSet(ruleSet: RuleSetInfo): Promise<RuleSetInfo> {
        const response = await this.http.fetch("ruleset", { method: 'post', body: json(ruleSet) });
        return await response.json();
    }

}

