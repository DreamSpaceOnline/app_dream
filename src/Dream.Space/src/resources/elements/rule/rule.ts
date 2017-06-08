import * as toastr from "toastr";
import { autoinject, bindable } from "aurelia-framework";
import { ValidationRules, ValidationController, validateTrigger } from "aurelia-validation"
import { AccountService } from "../../../services/account-service";
import { BootstrapFormRenderer } from "../../../form-validation/bootstrap-form-renderer";
import { SettingsService } from "../../../services/settings-service";
import { IdName, EnumValues } from "../../../common/helpers/enum-helper";
import { RulesApiClient, Rule as RuleInfo, DataSourceType } from "../../../services/services-generated";

@autoinject
export class Rule {

    @bindable rule: RuleInfo;

    expanded: boolean;
    editMode: boolean;
    deleteMode: boolean;
    powerUser: boolean;

    errors: {}[];
    indicatorDataSeries: {}[];
    periods: {}[];
    compareTypes: IdName[];
    ruleInfo: RuleInfo;
    originalRule: RuleInfo;

    dataSources: {}[];
    priceDataSeries: {}[];
    transformFunctions: {}[];

    dataSeriesV1: {}[];
    dataSeriesV2: {}[];

    constructor(
        private readonly ruleService: RulesApiClient,
        private readonly account: AccountService,
        private readonly validation: ValidationController,
        private readonly globalSettings: SettingsService
    ) {
        this.powerUser = this.account.currentUser.isAuthenticated;
        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new BootstrapFormRenderer());
        this.errors = [];
        this.ruleInfo = new RuleInfo();

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
        this.expanded = !this.expanded;
        if (!this.expanded && this.ruleInfo.ruleId > 0 && this.editMode) {
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

    setDataSeries(rule: RuleInfo) {
        if (rule) {

            if (rule.dataSourceV1 === DataSourceType.Indicator) {
                this.dataSeriesV1 = this.indicatorDataSeries;
            }
            if (rule.dataSourceV1 === DataSourceType.HistoricalData) { 
                this.dataSeriesV1 = this.priceDataSeries;
            }
            if (rule.dataSourceV1 === DataSourceType.Constant) {
                this.dataSeriesV1 = [];
            }

            if (rule.dataSourceV2 === DataSourceType.Indicator) { 
                this.dataSeriesV2 = this.indicatorDataSeries;
            }
            if (rule.dataSourceV2 === DataSourceType.HistoricalData) { 
                this.dataSeriesV2 = this.priceDataSeries;
            }
            if (rule.dataSourceV2 === DataSourceType.Constant) { 
                this.dataSeriesV2 = [];
            }
        }
    }

    startEdit() {
        this.originalRule = Object.assign({}, this.ruleInfo) as RuleInfo;
        this.editMode = true;

        ValidationRules
            .ensure((u: RuleInfo) => u.name).displayName("Rule name").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((u: RuleInfo) => u.description).displayName("Rule description").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((u: RuleInfo) => u.skipItemsV1).displayName("Skip value").required().withMessage(`\${$displayName} cannot be blank.`)
            .satisfies(value => value >= 0 && value < 1000).withMessage(`\${$displayName} must be between 0 - 999.`)
            .ensure((u: RuleInfo) => u.skipItemsV2).displayName("Skip value").required().withMessage(`\${$displayName} cannot be blank.`)
            .satisfies(value => value >= 0 && value < 1000).withMessage(`\${$displayName} must be between 0 - 999.`)
            .ensure((u: RuleInfo) => u.takeItemsV1).displayName("Take value").required().withMessage(`\${$displayName} cannot be blank.`)
            .satisfies(value => value >= 0 && value < 1000).withMessage(`\${$displayName} must be between 0 - 999.`)
            .ensure((u: RuleInfo) => u.takeItemsV2).displayName("Take value").required().withMessage(`\${$displayName} cannot be blank.`)
            .satisfies(value => value >= 0 && value < 1000).withMessage(`\${$displayName} must be between 0 - 999.`)
            .on(this.ruleInfo);

    }

    cancelEdit() {
        if (this.ruleInfo.ruleId > 0) {
            this.ruleInfo = this.originalRule;
            this.editMode = false;
        } else {
            this.ruleInfo.deleted = true;
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
            this.editMode = false;
            this.expanded = false;
            toastr.success(`Rule ${response.name} saved successfully!`, 'Rule Saved');
        } else {
            toastr.error("Failed to save rule", "Error");
        }
    }

}

