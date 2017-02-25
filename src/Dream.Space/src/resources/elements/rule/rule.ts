import * as toastr from "toastr";
import { autoinject, bindable } from "aurelia-framework";
import { ValidationRules, ValidationController, validateTrigger } from "aurelia-validation"
import { RuleService } from "../../../services/rule-service";
import { AccountService } from "../../../services/account-service";
import { BootstrapFormRenderer } from "../../../form-validation/bootstrap-form-renderer";
import { SettingsService } from "../../../services/settings-service";
import { RuleInfo, RuleViewModel } from "../../../common/types/rule-models";
import { IdName, EnumValues } from "../../../common/helpers/enum-helper";
import {RuleDataSource} from "../../../common/types/enums";

@autoinject
export class Rule {

    @bindable rule: RuleInfo;

    powerUser: boolean;
    errors: {}[];
    indicatorDataSeries: {}[];
    periods: {}[];
    compareTypes: IdName[];
    ruleInfo: RuleViewModel;
    originalRule: RuleViewModel;

    dataSources: {}[];
    priceDataSeries: {}[];
    transformFunctions: {}[];

    constructor(
        private ruleService: RuleService,
        private account: AccountService,
        private validation: ValidationController,
        private globalSettings: SettingsService
    ) {
        this.powerUser = this.account.currentUser.isAuthenticated;
        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new BootstrapFormRenderer());
        this.errors = [];
        this.ruleInfo = new RuleViewModel();

        this.periods = this.globalSettings.periods;
        this.compareTypes = EnumValues.getCompareOperators();
        this.dataSources = EnumValues.getRuleDataSources();
        this.priceDataSeries = EnumValues.geQuoteTypes();
        this.transformFunctions = EnumValues.getTransformFunctions();
    }

    ruleChanged(ruleItem: RuleInfo) {
        if (ruleItem) {
            const newRule = Object.assign({}, ruleItem) as RuleInfo;
            this.indicatorDataSeries = this.globalSettings.getIndicators(newRule.period);

            this.setDataSeries(newRule);
            this.ruleInfo = newRule;
        }
    }

    onExpanded() {
        this.ruleInfo.expanded = !this.ruleInfo.expanded;
        if (!this.ruleInfo.expanded && this.ruleInfo.ruleId > 0 && this.ruleInfo.editMode) {
            this.cancelEdit();
        }
    }

    onPeriodChange() {
        this.indicatorDataSeries = this.globalSettings.getIndicators(this.ruleInfo.period);
        this.setDataSeries(this.ruleInfo);
    }

    onDataSourceV1Change() {
        this.setDataSeries(this.ruleInfo);
    }

    onDataSourceV2Change() {
        this.setDataSeries(this.ruleInfo);
    }

    setDataSeries(rule: RuleViewModel) {
        if (rule) {

            if (rule.dataSourceV1 === RuleDataSource.Indicator) {
                rule.dataSeriesOptionsV1 = this.indicatorDataSeries;
            }
            if (rule.dataSourceV1 === RuleDataSource.HistoricalData) { 
                rule.dataSeriesOptionsV1 = this.priceDataSeries;
            }
            if (rule.dataSourceV1 === RuleDataSource.Constant) {
                rule.dataSeriesOptionsV1 = [];
            }

            if (rule.dataSourceV2 === RuleDataSource.Indicator) { 
                rule.dataSeriesOptionsV2 = this.indicatorDataSeries;
            }
            if (rule.dataSourceV2 === RuleDataSource.HistoricalData) { 
                rule.dataSeriesOptionsV2 = this.priceDataSeries;
            }
            if (rule.dataSourceV2 === RuleDataSource.Constant) { 
                rule.dataSeriesOptionsV2 = [];
            }
        }
    }

    startEdit() {
        this.originalRule = Object.assign({}, this.ruleInfo) as RuleViewModel;
        this.ruleInfo.editMode = true;

        ValidationRules
            .ensure((u: RuleViewModel) => u.name).displayName("Rule name").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((u: RuleViewModel) => u.description).displayName("Rule description").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((u: RuleViewModel) => u.skipItemsV1).displayName("Skip value").required().withMessage(`\${$displayName} cannot be blank.`)
            .satisfies(value => value >= 0 && value < 1000).withMessage(`\${$displayName} must be between 0 - 999.`)
            .ensure((u: RuleViewModel) => u.skipItemsV2).displayName("Skip value").required().withMessage(`\${$displayName} cannot be blank.`)
            .satisfies(value => value >= 0 && value < 1000).withMessage(`\${$displayName} must be between 0 - 999.`)
            .ensure((u: RuleViewModel) => u.takeItemsV1).displayName("Take value").required().withMessage(`\${$displayName} cannot be blank.`)
            .satisfies(value => value >= 0 && value < 1000).withMessage(`\${$displayName} must be between 0 - 999.`)
            .ensure((u: RuleViewModel) => u.takeItemsV2).displayName("Take value").required().withMessage(`\${$displayName} cannot be blank.`)
            .satisfies(value => value >= 0 && value < 1000).withMessage(`\${$displayName} must be between 0 - 999.`)
            .on(this.ruleInfo);

    }

    cancelEdit() {
        if (this.ruleInfo.ruleId > 0) {
            this.ruleInfo = this.originalRule;
            this.ruleInfo.editMode = false;
        } else {
            this.ruleInfo.deleted = true;
        }
        this.validation.reset();
    }

    cancelDelete() {
        this.ruleInfo.deleteMode = false;
        this.ruleInfo.expanded = false;
    }

    startDelete() {
        this.ruleInfo.deleteMode = true;
        this.ruleInfo.expanded = true;
    }

    async confirmDelete() {
        try {
            await this.ruleService.deleteRule(this.ruleInfo.ruleId);

            this.ruleInfo.deleted = true;
            toastr.success(`Rule ${this.ruleInfo.name} deleted successfully!`, "Rule Deleted");
        } catch (e) {

            toastr.error("Failed to delete rule", "Error");
        }
    }

    async trySaveRule() {
        const response = await this.validation.validate();
        if (response.valid) {
            this.saveRule();
        } else {
            toastr.warning("Please correct validation errors.", "Validation Errors");
        }
    }

    async saveRule() {
        const response = await this.ruleService.saveRule(this.ruleInfo);
        if(response.ruleId > 0) {
            this.ruleInfo.editMode = false;
            this.ruleInfo.expanded = false;
            toastr.success(`Rule ${response.name} saved successfully!`, 'Rule Saved');
        } else {
            toastr.error("Failed to save rule", "Error");
        }
    }

}

