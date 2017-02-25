import * as toastr from "toastr";
import { autoinject, bindable } from "aurelia-framework";
import { ValidationRules, ValidationController, validateTrigger } from "aurelia-validation"
import { IndicatorService } from "../../../services/indicator-service";
import { BootstrapFormRenderer } from "../../../form-validation/bootstrap-form-renderer";
import { AccountService } from "../../../services/account-service";
import { SettingsService } from "../../../services/settings-service";
import { IndicatorInfo, IndicatorModel } from "../../../common/types/indicator-models";

@autoinject()
export class Indicator {

    @bindable indicator: IndicatorInfo;
    indicatorInfo: IndicatorModel;
    originalIndicator: IndicatorModel;

    powerUser: boolean;
    errors: {}[];
    indicatorDataSeries: {}[];
    periods: {}[];
    formulaes: { name: string;
        defaults: {}[];
    }[];
    plotNumbers: {}[];
    chartTypes: {}[];

    constructor(
        private indicatorService: IndicatorService,
        private account: AccountService,
        private validation: ValidationController,
        private globalSettings: SettingsService
    ) {
        this.powerUser = this.account.currentUser.isAuthenticated;
        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new BootstrapFormRenderer());

        this.errors = [];
        this.indicatorDataSeries = [];
        this.periods = this.globalSettings.periods;

        this.formulaes = [
            {
                name: "EMA", defaults: [
                    { paramName: "Period", value: 13 }
                ]
            },
            {
                name: "MACD", defaults: [
                    { paramName: "FastEmaPeriod", value: 12 },
                    { paramName: "SlowEmaPeriod", value: 26 },
                    { paramName: "SignalEmaPeriod", value: 9 }
                ]
            },
            {
                name: "ImpulseSystem", defaults: [
                    { paramName: "FastEmaPeriod", value: 12 },
                    { paramName: "SlowEmaPeriod", value: 26 },
                    { paramName: "SignalEmaPeriod", value: 9 },
                    { paramName: "EmaPeriod", value: 13 }
                ]
            },
            {
                name: "ForceIndex", defaults: [
                    { paramName: "Period", value: 13 }
                ]
            }
        ];

        this.plotNumbers = [0, 1, 2, 3];
        this.chartTypes = [
            { name: "Ohlc", id: 0 },
            { name: "Candlestick", id: 1 },
            { name: "Line", id: 2 },
            { name: "Column", id: 3 },
            { name: "Area", id: 4 }
        ];
    }

    indicatorChanged(indicatorItem) {
        if (indicatorItem) {
            let newIndicator = Object.assign({}, indicatorItem);
            this.indicatorInfo = newIndicator;

            if (this.indicatorInfo.isNew) {
                this.indicatorInfo.name = this.formulaes[0].name;
                this.indicatorInfo.params = this.formulaes[0].defaults;
            }
        }
    }

    onExpanded() {
        this.indicatorInfo.expanded = !this.indicatorInfo.expanded;
        if (!this.indicatorInfo.expanded && this.indicatorInfo.indicatorId > 0 && this.indicatorInfo.editMode) {
            this.cancelEdit();
        }
    }

    onFormulaChange() {
        let defParams = this.formulaes.filter(c => c.name === this.indicatorInfo.name);
        if (defParams && defParams.length > 0) {
            this.indicatorInfo.params = defParams[0].defaults;
        } else {
            toastr.warning("Unable to pull default params for selected formula.", "Data is missing");
        }
    }

    startEdit() {
        this.originalIndicator = Object.assign({}, this.indicatorInfo);
        this.indicatorInfo.editMode = true;

        ValidationRules
            .ensure( (m: IndicatorModel) => m.description).displayName("Indicator Name").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: IndicatorModel) => m.chartColor).displayName('Line Color').required().withMessage(`\${$displayName} cannot be blank.`)
                .matches(/^#[0-9a-fA-F]{6}$/).withMessage(`\${$displayName} value should be in format: #AAFF99.`)
            .on(this.indicatorInfo);

    }

    cancelEdit() {
        if (this.indicatorInfo.indicatorId > 0) {
            this.indicatorInfo = this.originalIndicator;
            this.indicatorInfo.editMode = false;
        } else {
            this.indicatorInfo.deleted = true;
        }
        this.validation.reset();
    }

    cancelDelete() {
        this.indicatorInfo.deleteMode = false;
        this.indicatorInfo.expanded = false;
    }

    startDelete() {
        this.indicatorInfo.deleteMode = true;
        this.indicatorInfo.expanded = true;
    }

    async confirmDelete() {
        try {
            await this.indicatorService.deleteIndicator(this.indicatorInfo.indicatorId);
                
            this.indicatorInfo.deleted = true;
            toastr.success(`Indicator ${this.indicatorInfo
                .description} deleted successfully!`,
                "Indicator Deleted");

        } catch (e) {
            this.errors.push(e);
        } 
    }

    async trySaveIndicator() {
        const response = await this.validation.validate();
        if (response.valid) {
            await this.saveIndicator();
        } else {
            toastr.warning("Please correct validation errors.", "Validation Errors");
        }
    }

    async saveIndicator() {
        this.errors = [];
        this.indicatorInfo.jsonParams = JSON.stringify(this.indicatorInfo.params);

        const response = await this.indicatorService.saveIndicator(this.indicatorInfo);
        if (response.name) {
            this.indicatorInfo.editMode = false;
            this.indicatorInfo.expanded = false;
            toastr.success(`indicator ${response.name} saved successfully!`, "Indicator Saved");
        }
    }

}

