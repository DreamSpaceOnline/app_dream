import * as toastr from "toastr";
import { autoinject, bindable } from "aurelia-framework";
import { EventAggregator, Subscription } from 'aurelia-event-aggregator';
import { RuleSetService } from '../../../services/rule-set-service';
import { RuleService } from '../../../services/rule-service';
import { ValidationRules, ValidationController, validateTrigger } from "aurelia-validation"
import { BootstrapFormRenderer } from "../../../form-validation/bootstrap-form-renderer";
import { AccountService } from "../../../services/account-service";
import { SettingsService } from "../../../services/settings-service";
import { RuleSetInfo, RuleInfo, RuleModel, RuleSetViewModel } from "../../../common/types/rule-models";
import { IdName } from "../../../common/helpers/enum-helper";

@autoinject
export class RuleSet {

    @bindable ruleset: RuleSetInfo;
    ruleSetInfo: RuleSetViewModel;
    originalRuleSet: RuleSetViewModel;
    powerUser: boolean;
    errors: {}[] = [];
    subscriptions: Subscription[] = [];
    periods: IdName[] = [];
    rules: RuleInfo[] = [];
    attachedRuleId: number = 0;
    attachedRule:RuleInfo;

    constructor(
        private eventAggregator: EventAggregator,
        private ruleSetService: RuleSetService,
        private ruleService: RuleService,
        private account: AccountService,
        private validation: ValidationController,
        private globalSettings: SettingsService
    ) {
        this.powerUser = this.account.currentUser.isAuthenticated;
        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new BootstrapFormRenderer());
        this.periods = this.globalSettings.periods;
    }

    rulesetChanged(ruleSetItem: RuleSetInfo) {
        if (ruleSetItem) {
            let newRule = Object.assign({}, ruleSetItem);
            this.ruleSetInfo = newRule;
        }
    }

    onExpanded() {
        this.ruleSetInfo.expanded = !this.ruleSetInfo.expanded;
        if (!this.ruleSetInfo.expanded && this.ruleSetInfo.ruleSetId > 0 && this.ruleSetInfo.editMode === true) {
            this.cancelEdit();
        }
    }


    startEdit() {
        this.originalRuleSet = Object.assign({}, this.ruleSetInfo);
        this.ruleSetInfo.editMode = true;
        this.eventAggregator.publish('rule-set-edit-mode-' + this.ruleSetInfo.ruleSetId, true);

        ValidationRules
            .ensure( (u: RuleSetViewModel) => u.name).displayName('Rule Set Name').required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure( (u: RuleSetViewModel) => u.description).displayName('Description').required().withMessage(`\${$displayName} cannot be blank.`)
            .on(this.ruleSetInfo);

    }

    cancelEdit() {
        if (this.ruleSetInfo.ruleSetId > 0) {
            this.ruleSetInfo = this.originalRuleSet;
            this.ruleSetInfo.editMode = false;
            this.eventAggregator.publish('rule-set-edit-mode-' + this.ruleSetInfo.ruleSetId, false);

        } else {
            this.ruleSetInfo.deleted = true;
        }
        this.validation.reset();
    }

    cancelDelete() {
        this.ruleSetInfo.deleteMode = false;
        this.ruleSetInfo.expanded = false;
    }

    startDelete() {
        this.ruleSetInfo.deleteMode = true;
        this.ruleSetInfo.expanded = true;
    }

    async confirmDelete() {
        try {
            await this.ruleSetService.deleteRuleSet(this.ruleSetInfo.ruleSetId);
            this.ruleSetInfo.deleted = true;
            toastr.success(`Rule set ${this.ruleSetInfo.description} deleted successfully!`, 'Rule Set Deleted');
        } catch (e) {
            toastr.error("Failed to delete rule set", "Error");
            this.errors.push(e);
        } 
    }

    async addRule() {
        this.ruleSetInfo.isAdding = !this.ruleSetInfo.isAdding;
        if (this.ruleSetInfo.isAdding && this.rules.length === 0) {

            try {
                const response = await this.ruleService.getRulesForPeriod(this.ruleSetInfo.period);
                this.rules = response;

                if (this.rules.length > 0) {
                    this.attachedRule = this.rules[0];
                }
            } catch (e) {
                toastr.error("Failed to get rules", "ruleService.getRulesForPeriod");
                this.errors.push(e);
            } 
        }
    }

    onRuleChange() {
        this.attachedRule = this.rules.find(item => item.ruleId === this.attachedRuleId);
    }

    cancelAddRule() {
        this.ruleSetInfo.isAdding = false;
    }

    confirmAddRule() {
        this.ruleSetInfo.isAdding = false;
        const rule: RuleModel = {
            name: this.attachedRule.name,
            ruleId: this.attachedRule.ruleId,
            description: this.attachedRule.description,
            ruleSetId: this.ruleSetInfo.ruleSetId
        };

        this.ruleSetInfo.rules.push(rule);
    }

    async trySaveRuleSet() {
        const response = await this.validation.validate();
        if (response.valid) {
            await this.saveRuleSet();
        } else {
            toastr.warning("Please correct validation errors.", "Validation Errors");
        }
    }

    async saveRuleSet() {
        this.errors = [];
        try {
            const response = await this.ruleSetService.saveRuleSet(this.ruleSetInfo);
            if (response.ruleSetId > 0) {
                this.ruleSetInfo.editMode = false;
                this.ruleSetInfo.expanded = false;

                toastr.success(`Rule set ${response.name} saved successfully!`, "Rule set Saved");
                this.eventAggregator.publish("rule-set-edit-mode-" + this.ruleSetInfo.ruleSetId, false);
            }
        } catch (e) {
            toastr.error("Failed to save rule set", "Error");
            this.errors.push(e);
        } 
    }

    moveRuleUp(rule) {
        if (rule && rule.ruleId) {
            let index = this.ruleSetInfo.rules.findIndex(item => item.ruleId === rule.ruleId);
            if (index > 0) {
                this.ruleSetInfo.rules.splice(index - 1, 0, this.ruleSetInfo.rules.splice(index, 1)[0]);
            }
        }
    }

    moveRuleDown(rule) {
        if (rule && rule.ruleId) {
            let index = this.ruleSetInfo.rules.findIndex(item => item.ruleId === rule.ruleId);
            if (index > -1 && index < this.ruleSetInfo.rules.length - 1) {
                this.ruleSetInfo.rules.splice(index + 1, 0, this.ruleSetInfo.rules.splice(index, 1)[0]);
            }
        }
    }


    detached() {
        this.unsubscribe();
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
            this.eventAggregator.subscribe('rule-set-item-up-' + this.ruleset.ruleSetId, rule => this.moveRuleUp(rule)));

        this.subscriptions.push(
            this.eventAggregator.subscribe('rule-set-item-down-' + this.ruleset.ruleSetId, rule => this.moveRuleDown(rule)));

    }

}

