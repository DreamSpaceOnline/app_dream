import { autoinject, bindable } from "aurelia-framework";
import { EventAggregator } from 'aurelia-event-aggregator';
import { IdName } from "../../../common/helpers/enum-helper";
import { SettingsService } from "../../../services/settings-service";
import {VStrategyRuleSet} from "../../../services/services-generated";

@autoinject

export class StrategyRuleSet {
    @bindable ruleset: VStrategyRuleSet;
    periods: IdName[];
    expanded: boolean;
    deleteMode: boolean;

    constructor(private readonly eventAggregator: EventAggregator, settings: SettingsService) {
        this.periods = settings.periods;
    }

    rulesetChanged(newValue) {
        if (newValue) {
        }
    }

    onExpanded() {
        this.expanded = !this.expanded;
    }

    cancelDelete() {
        this.deleteMode = false;
        this.expanded = false;
    }

    startDelete() {
        this.deleteMode = true;
        this.expanded = true;
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

