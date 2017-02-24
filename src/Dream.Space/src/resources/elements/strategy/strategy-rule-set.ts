import { autoinject, bindable } from "aurelia-framework";
import { EventAggregator } from 'aurelia-event-aggregator';
import {StrategyRuleSetInfo} from "../../../common/types/rule-models";
import {IdName} from "../../../common/helpers/enum-helper";
import {SettingsService} from "../../../services/settings-service";

@autoinject

export class StrategyRuleSet {
    @bindable ruleset: StrategyRuleSetInfo;
    periods: IdName[];

    constructor(private eventAggregator: EventAggregator, settings: SettingsService) {
        this.periods = settings.periods;
    }

    rulesetChanged(newValue) {
        if (newValue) {
        }
    }

    onExpanded() {
        this.ruleset.expanded = !!!this.ruleset.expanded;
    }

    cancelDelete() {
        this.ruleset.deleteMode = false;
        this.ruleset.expanded = false;
    }

    startDelete() {
        this.ruleset.deleteMode = true;
        this.ruleset.expanded = true;
    }

    setOptionalStatus(flag) {
        this.ruleset.ruleSetOptional = flag;
    }

    onMoveUp() {
        this.eventAggregator.publish("strategy-rule-set-up", this.ruleset.ruleSetId);
    }

    onMoveDown() {
        this.eventAggregator.publish("strategy-rule-set-down", this.ruleset.ruleSetId);
    }

    confirmDelete() {
        this.eventAggregator.publish("strategy-rule-set-detach", this.ruleset.ruleSetId);
    }

}

