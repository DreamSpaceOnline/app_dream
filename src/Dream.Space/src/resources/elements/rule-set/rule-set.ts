import * as toastr from "toastr";
import { autoinject, bindable } from "aurelia-framework";
import { EventAggregator, Subscription } from 'aurelia-event-aggregator';
import { ValidationRules, ValidationController, validateTrigger } from "aurelia-validation"
import { BootstrapFormRenderer } from "../../../form-validation/bootstrap-form-renderer";
import { AccountService } from "../../../services/account-service";
import { SettingsService } from "../../../services/settings-service";
import { IdName } from "../../../common/helpers/enum-helper";
import { RuleSetsApiClient, RuleModel, RulesApiClient, Rule as RuleInfo, RuleSetModel } from "../../../services/services-generated";

@autoinject
export class RuleSet {

    @bindable ruleset: RuleSetModel;
    
    originalRuleSet: RuleSetModel;
    powerUser: boolean;
    expanded: boolean;
    editMode: boolean;
    deleteMode: boolean;
    addMode: boolean;
    ruleSetInfo: RuleSetModel;

    errors: {}[] = [];
    subscriptions: Subscription[] = [];
    periods: IdName[] = [];
    rules: RuleInfo[] = [];
    attachedRuleId: number = 0;
    attachedRule:RuleInfo;

    constructor(
        private readonly eventAggregator: EventAggregator,
        private readonly ruleSetService: RuleSetsApiClient,
        private readonly ruleService: RulesApiClient,
        private readonly account: AccountService,
        private readonly validation: ValidationController,
        private readonly globalSettings: SettingsService
    ) {
        this.powerUser = this.account.currentUser.isAuthenticated;
        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new BootstrapFormRenderer());
        this.periods = this.globalSettings.periods;
    }

    rulesetChanged(ruleSetItem: RuleSetModel) {
        if (ruleSetItem) {
            const newRule = Object.assign({}, ruleSetItem);
            this.ruleSetInfo = newRule;
        }
    }

    onExpanded() {
        this.expanded = !this.expanded;
        if (!this.expanded && this.ruleSetInfo.ruleSetId > 0 && this.editMode) {
            this.cancelEdit();
        }
    }


    startEdit() {
        this.originalRuleSet = Object.assign({}, this.ruleSetInfo);
        this.editMode = true;
        this.eventAggregator.publish('rule-set-edit-mode-' + this.ruleSetInfo.ruleSetId, true);

        ValidationRules
            .ensure((u: RuleSetModel) => u.name).displayName('Rule Set Name').required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((u: RuleSetModel) => u.description).displayName('Description').required().withMessage(`\${$displayName} cannot be blank.`)
            .on(this.ruleSetInfo);

    }

    cancelEdit() {
        if (this.ruleSetInfo.ruleSetId > 0) {
            this.ruleSetInfo = this.originalRuleSet;
            this.editMode = false;
            this.eventAggregator.publish('rule-set-edit-mode-' + this.ruleSetInfo.ruleSetId, false);

        } else {
            this.ruleSetInfo.deleted = true;
        }
        this.validation.reset();
    }

    cancelDelete() {
        this.deleteMode = false;
        this.expanded = false;
    }

    startDelete() {
        this.deleteMode = true;
        this.expanded = true;
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
        this.addMode = !this.addMode;
        if (this.addMode && this.rules.length === 0) {

            try {
                const response = await this.ruleService.getRules(this.ruleSetInfo.period);
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
        this.addMode = false;
    }

    confirmAddRule() {
        this.addMode = false;

        const rule = new RuleModel();
        rule.name = this.attachedRule.name;
        rule.ruleId = this.attachedRule.ruleId;
        rule.description = this.attachedRule.description;
        rule.ruleSetId = this.ruleSetInfo.ruleSetId;
    
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
                this.editMode = false;
                this.expanded = false;

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

