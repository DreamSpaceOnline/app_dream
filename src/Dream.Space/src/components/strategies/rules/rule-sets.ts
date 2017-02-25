import { autoinject } from "aurelia-framework";
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import { RuleSetService } from "../../../services/rule-set-service";
import {SettingsService} from "../../../services/settings-service";
import {AccountService} from "../../../services/account-service";
import {IdName} from "../../../common/helpers/enum-helper";
import {RuleSetViewModel} from "../../../common/types/rule-models";

@autoinject
export class RuleSets {

    rulesets: RuleSetViewModel[] = [];

    powerUser: boolean;
    errors: {}[] = [];
    activePeriod: IdName;
    periods: IdName[] = [];
    router: Router;
    routeName: string;

    constructor(
        private ruleSetService: RuleSetService,
        private globalSettings: SettingsService,
        account: AccountService
    ) {
        this.powerUser = account.currentUser.isAuthenticated;
        this.activePeriod = this.globalSettings.defaultPeriod;
        this.periods = this.globalSettings.periods;
    }

    activate(params, routeConfig: RouteConfig, navigationInstruction: NavigationInstruction) {
        this.router = navigationInstruction.router;
        this.routeName = routeConfig.name;

        if (params.period) {
            this.activePeriod = this.activatePeriod(params.period);
            this.loadRuleSets(this.activePeriod.id);

        } else {
            let defaultUrl = '/strategies/rule-sets/' + this.activePeriod.name.toLowerCase();
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

    addRuleSet() {
        const ruleset = new RuleSetViewModel();
        ruleset.name = "New Rule set";
        ruleset.expanded = true;
        ruleset.period = this.activePeriod.id;
        ruleset.editMode = true;
    

        this.rulesets.push(ruleset);
    }

    loadRuleSetsForPeriod(period) {
        let url = `/strategies/rule-sets/${period.url}`;
        this.router.navigate(url);
    }

    isPeriodActive(period) {
        return period.id === this.activePeriod.id;
    }

    async loadRuleSets(periodId) {
        this.rulesets = await this.ruleSetService.getRuleSetsForPeriod(periodId);
    }

}