import { autoinject } from "aurelia-framework";
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import {SettingsService} from "../../../services/settings-service";
import {AccountService} from "../../../services/account-service";
import {IdName} from "../../../common/helpers/enum-helper";
import {RuleSetsApiClient, RuleSetModel } from "../../../services/services-generated";

@autoinject
export class RuleSets {

    rulesets: RuleSetModel[] = [];

    powerUser: boolean;
    errors: {}[] = [];
    activePeriod: IdName;
    periods: IdName[] = [];
    router: Router;
    routeName: string;

    constructor(
        private readonly ruleSetService: RuleSetsApiClient,
        private readonly globalSettings: SettingsService,
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
            const defaultUrl = "/strategies/rule-sets/" + this.activePeriod.name.toLowerCase();
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
        const ruleset = new RuleSetModel();
        ruleset.name = "New Rule set";
        //ruleset.expanded = true;
        ruleset.period = this.activePeriod.id;
        //ruleset.editMode = true;
    

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
        this.rulesets = await this.ruleSetService.getRuleSets(periodId);
    }

}