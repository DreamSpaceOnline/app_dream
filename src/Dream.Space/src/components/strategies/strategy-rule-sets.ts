import * as toastr from "toastr";
import { autoinject } from "aurelia-framework";
import { EventAggregator, Subscription } from 'aurelia-event-aggregator';
import { StrategyService} from "../../services/strategy-service";
import { RuleSetService} from "../../services/rule-set-service";
import { SettingsService} from "../../services/settings-service";
import { IdName} from "../../common/helpers/enum-helper";
import { StrategySummary} from "../../common/types/strategy-models";
import { RuleSetInfo, StrategyRuleSetViewModel } from "../../common/types/rule-models";
import {QuotePeriod} from "../../common/types/enums";

@autoinject
export class StrategyRuleSets {

    subscriptions: Subscription[] = [];
    periods: IdName[] = [];
    strategy: StrategySummary;
    editMode = false;
    rulesets: StrategyRuleSetViewModel [] = [];
    originalRulesets: StrategyRuleSetViewModel [] = [];
    periodRuleSets: RuleSetInfo[] = [];
    attachedRuleSet: {
        ruleSetId: number;
        name:string;
        period: QuotePeriod;
        description: string;
    };
    addingMode = false;
    strategyChangedEvent = "onStrategyChanged";

    constructor(
        private eventAggregator: EventAggregator,
        private strategyService: StrategyService,
        private ruleSetService: RuleSetService,
        settings: SettingsService
    ) {
        this.periods = settings.periods;
        this.subscribe();
    }

    subscribe() {
        this.subscriptions.push(
            this.eventAggregator.subscribe("strategy-rule-set-up", ruleSetId => this.moveRuleSetUp(ruleSetId)));

        this.subscriptions.push(
            this.eventAggregator.subscribe("strategy-rule-set-down", ruleSetId => this.moveRuleSetDown(ruleSetId)));

        this.subscriptions.push(
            this.eventAggregator.subscribe("strategy-rule-set-detach", ruleSetId => this.detachRuleSet(ruleSetId)));
    }

    detached() {
        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach(subscription => {
                subscription.dispose();
            });
        }
    }

    moveRuleSetUp(ruleSetId) {
        const index = this.rulesets.findIndex(item => item.ruleSetId === ruleSetId);
        if (index > 0) {
            this.rulesets.splice(index - 1, 0, this.rulesets.splice(index, 1)[0]);
        }
    }

    moveRuleSetDown(ruleSetId) {
        const index = this.rulesets.findIndex(item => item.ruleSetId === ruleSetId);
        if (index > -1 && index < this.rulesets.length - 1) {
            this.rulesets.splice(index + 1, 0, this.rulesets.splice(index, 1)[0]);
        }
    }

    detachRuleSet(ruleSetId) {
        const index = this.rulesets.findIndex(item => item.ruleSetId === ruleSetId);
        if (index !== -1) {
            this.rulesets.splice(index, 1);
        }
    }

    async activate(params) {
        if (params.strategyUrl) {
            try {
                const strategy = await this.strategyService.getSummaryByUrl(params.strategyUrl);
                if (strategy && strategy.strategyId) {
                    this.strategy = strategy;
                    this.eventAggregator.publish(this.strategyChangedEvent, { url: this.strategy.url, module: "strategy-rule-sets" });

                    await this.loadRuleSets(this.strategy.strategyId);

                } else {
                    toastr.error(`Failed to load summary for url ${params.strategyUrl}`, "Load Summary Failed");
                }
            } catch (e) {
                toastr.error(`Failed to load summary for url ${params.strategyUrl}`, "Exception");
            } 

        }
    }

    async loadRuleSets(strategyId: number) {
        this.rulesets = await this.ruleSetService.getRuleSetsForStrategy(strategyId);
    }

    startEdit() {
        this.originalRulesets = [];
        this.rulesets.forEach(item => {
            this.originalRulesets.push(Object.assign({}, item));
        });

        this.setEditMode(true);
    }

    cancelEdit() {
        this.rulesets = this.originalRulesets;
        this.setEditMode(false);
    }

    setEditMode(mode) {
        this.editMode = mode;

        if (this.rulesets.length > 0) {
            this.rulesets.forEach(item => {
                item.editMode = mode;
            });
        }
    }

    addRuleSet() {
        this.attachedRuleSet = {
            ruleSetId: 0,
            period: -1,
            description: "",
            name: ""
        };

        this.addingMode = true;
    }

    cancelAddRuleSet() {
        this.addingMode = false;
    }

    onPeriodSelected() {
        this.ruleSetService.getRuleSetsForPeriod(this.attachedRuleSet.period)
            .then(data => {
                this.periodRuleSets = data;
            });
    }

    onRuleSetSelected() {
        const index = this.periodRuleSets.findIndex(r => r.ruleSetId === this.attachedRuleSet.ruleSetId);
        if (index !== -1) {
            this.attachedRuleSet = this.periodRuleSets[index];
        }
    }

    confirmAddRuleSet() {

        const ruleset = new StrategyRuleSetViewModel();
        ruleset.editMode = true;
        ruleset.ruleSetName = this.attachedRuleSet.name;
        ruleset.ruleSetDescription = this.attachedRuleSet.description;
        ruleset.ruleSetPeriod = this.attachedRuleSet.period;
        ruleset.ruleSetId = this.attachedRuleSet.ruleSetId;

        if (this.validateRuleSet(ruleset)) {
            this.rulesets.push(ruleset);
            this.addingMode = false;
        }
    }

    validateRuleSet(ruleSet) {
        let result = true;

        if (ruleSet.ruleSetId > 0) {
            const index = this.rulesets.findIndex(r => r.ruleSetId === ruleSet.ruleSetId);
            if (index !== -1) {
                result = false;
                toastr.warning(`Selected Rule Set is already part of this strategy`, "Validation Error");
            }
        } else {
            result = false;
            toastr.warning(`Selected Rule Set doesn't have ID`, "Validation Error");
        }

        return result;
    }

    async trySaveRuleSets() {
        if (this.rulesets && this.rulesets.length > 0) {
            await this.saveRuleSets();
        } else {
            toastr.warning(`At least 1 rule set must be attached`, "Validation Error");
        }
    }

    async saveRuleSets() {
        let orderId = 1;
        let strategyId = this.strategy.strategyId;

        this.rulesets.forEach(item => {
            item.ruleSetOrderId = orderId;
            item.strategyId = strategyId;

            orderId = orderId + 1;
        });

        try {
            await this.ruleSetService.saveRuleSetsForStrategy(this.strategy.strategyId, this.rulesets);
            this.setEditMode(false);
            toastr.success("Rule Sets are successfully saved", "Rule Sets Attached");

        } catch (e) {
            toastr.error("Rule Sets failed to save", "Exception");
        } 
    }

}