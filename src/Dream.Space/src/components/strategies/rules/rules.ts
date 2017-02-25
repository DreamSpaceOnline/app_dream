import { autoinject } from "aurelia-framework";
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import {RuleService} from "../../../services/rule-service";
import {SettingsService} from "../../../services/settings-service";
import {IdName} from "../../../common/helpers/enum-helper";
import {RuleViewModel} from "../../../common/types/rule-models";

@autoinject
export class Rules {

    rules: RuleViewModel[] = [];
    activePeriod: IdName;
    periods: IdName[] = [];
    router: Router;
    errors: {}[] = [];
    routeName: string;

    constructor(private ruleService: RuleService, private globalSettings: SettingsService) {
        this.activePeriod = this.globalSettings.defaultPeriod;
        this.periods = this.globalSettings.periods;
    }

    activate(params, routeConfig: RouteConfig , navigationInstruction: NavigationInstruction) {
        this.router = navigationInstruction.router;
        this.routeName = routeConfig.name;

        if (params.period) {
            this.activePeriod = this.activatePeriod(params.period);
            this.loadRules(this.activePeriod.id);

        } else {
            let defaultUrl = '/strategies/rules/' + this.activePeriod.name.toLowerCase();
            this.router.navigate(defaultUrl);
        }

    }

    activatePeriod(periodUrl): IdName {

        this.periods.forEach(element => {
            element.active = false;
        });

        let result: IdName;

        const index = this.periods.findIndex(i => i.name.toLowerCase() === periodUrl.toLowerCase());
        if (index === -1) {
            result = this.activePeriod;
        } else {
            result = this.periods[index];
        }
        return result;
    }

    addRule() {
        const rule = new RuleViewModel();
        rule.name = "New Rule";
        rule.expanded = true;
        rule.period = this.activePeriod.id;
        rule.editMode = true;

        this.rules.push(rule);
    }

    loadRulesForPeriod(period) {
        const url = `/strategies/rules/${period.url}`;
        this.router.navigate(url);
    }

    isPeriodActive(period) {
        return period.id === this.activePeriod.id;
    }

    async loadRules(periodId) {
        this.rules = await this.ruleService.getRulesForPeriod(periodId);
    }

}