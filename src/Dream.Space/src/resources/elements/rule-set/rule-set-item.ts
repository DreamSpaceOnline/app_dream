import { autoinject, bindable } from "aurelia-framework";
import { EventAggregator, Subscription } from 'aurelia-event-aggregator';
import {RuleModel} from "../../../services/services-generated";

@autoinject
export class RuleSetItem {
    @bindable rule: RuleModel;
    subscriptions: Subscription[] = [];

    editMode: boolean = false;
    deleteMode: boolean;
    expanded: boolean;

    constructor(private readonly eventAggregator: EventAggregator) {
    }

    onExpanded() {
        this.expanded = !this.expanded;
    }

    startDelete() {
        this.deleteMode = true;
        this.expanded = true;
    }

    confirmDelete() {
        this.deleteMode = false;
        this.expanded = false;
        this.rule.deleted = true;
    }

    cancelDelete() {
        this.deleteMode = false;
        this.expanded = false;
    }

    onMoveUp() {
        this.eventAggregator.publish('rule-set-item-up-' + this.rule.ruleSetId, this.rule);
        return false;
    }

    onMoveDown() {
        this.eventAggregator.publish('rule-set-item-down-' + this.rule.ruleSetId, this.rule);
        return false;
    }

    detached() {
        this.unsubscribe();
    }

    setEditMode(flag) {
        this.editMode = flag;
    }

    unsubscribe() {
        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach(subscription => {
                subscription.dispose();
            });
        }
    }

    attached() {

        this.subscriptions.push(
            this.eventAggregator.subscribe("rule-set-edit-mode-" + this.rule.ruleSetId, flag => this.setEditMode(flag)));

        this.subscriptions.push(
            this.eventAggregator.subscribe("rule-set-edit-mode-" + this.rule.ruleSetId, flag => this.setEditMode(flag)));

    }
}