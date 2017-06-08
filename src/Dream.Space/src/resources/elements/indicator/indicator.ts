import * as toastr from "toastr";
import { autoinject, bindable } from "aurelia-framework";
import { ValidationRules, ValidationController, validateTrigger } from "aurelia-validation"
import { BootstrapFormRenderer } from "../../../form-validation/bootstrap-form-renderer";
import { AccountService } from "../../../services/account-service";
import { SettingsService } from "../../../services/settings-service";
import { IndicatorsApiClient, Indicator as IndicatorInfo, IndicatorParam } from "../../../services/services-generated";
import * as Enumhelper from "../../../common/helpers/enum-helper";

export class Formula {
    name: string;
    defaults: IndicatorParam[];
}

@autoinject()
export class Indicator {

    @bindable indicator: IndicatorInfo;
    indicatorInfo: IndicatorInfo;
    originalIndicator: IndicatorInfo;

    editMode:boolean;
    expanded: boolean;
    powerUser: boolean;
    deleteMode: boolean;

    errors: {}[];
    indicatorDataSeries: {}[];
    periods: Enumhelper.IdName[];
    formulas: Formula[] = [];
    plotNumbers: {}[];
    chartTypes: {}[];

    createIndicatorParam(paramName: string, paramValue: number): IndicatorParam {
        const param = new IndicatorParam();
        param.paramName = paramName;
        param.value = paramValue;

        return param;
    }

    createFormula(formulaName: string, params: IndicatorParam[]) : Formula {
        const formula = new Formula();
        formula.name = formulaName;
        formula.defaults = params;

        return formula;
    }

    constructor(
        private readonly indicatorService: IndicatorsApiClient,
        private readonly account: AccountService,
        private readonly validation: ValidationController,
        private readonly globalSettings: SettingsService
    ) {
        this.powerUser = this.account.currentUser.isAuthenticated;
        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new BootstrapFormRenderer());

        this.errors = [];
        this.indicatorDataSeries = [];
        this.periods = this.globalSettings.periods;

        this.formulas = [
            this.createFormula("EMA", [
                this.createIndicatorParam("Period", 13)
            ]),
            this.createFormula("UpperChannel", [
                this.createIndicatorParam("Period", 26)
            ]),
            this.createFormula("LowerChannel", [
                this.createIndicatorParam("Period", 26)
            ]),
            this.createFormula("SMA", [
                this.createIndicatorParam("Period", 13)
            ]),
            this.createFormula("RSI", [
                this.createIndicatorParam("Period", 14)
            ]),
            this.createFormula("NHNL", [
                this.createIndicatorParam("Period", 26)
            ]),
            this.createFormula("MACD", [
                this.createIndicatorParam("FastEmaPeriod", 12),
                this.createIndicatorParam("SlowEmaPeriod", 26),
                this.createIndicatorParam("SignalEmaPeriod", 9)
            ]),
            this.createFormula("ImpulseSystem", [
                this.createIndicatorParam("FastEmaPeriod", 12),
                this.createIndicatorParam("SlowEmaPeriod", 26),
                this.createIndicatorParam("SignalEmaPeriod", 9),
                this.createIndicatorParam("EmaPeriod", 13)
            ]),
            this.createFormula("ForceIndex", [
                this.createIndicatorParam("Period", 13)
            ])
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

    indicatorChanged(indicatorItem: any) {
        if (indicatorItem) {
            let newIndicator = Object.assign({}, indicatorItem);
            this.indicatorInfo = newIndicator;

            if (this.indicatorInfo.indicatorId === 0) {
                this.indicatorInfo.name = this.formulas[0].name;
                this.indicatorInfo.params = this.formulas[0].defaults;
            }
        }
    }

    onExpanded() {
        this.expanded = !this.expanded;
        if (!this.expanded && this.indicatorInfo.indicatorId > 0 && this.editMode) {
            this.cancelEdit();
        }
    }

    onFormulaChange() {
        let defParams = this.formulas.filter(c => c.name === this.indicatorInfo.name);
        if (defParams && defParams.length > 0) {
            this.indicatorInfo.params = defParams[0].defaults;
        } else {
            toastr.warning("Unable to pull default params for selected formula.", "Data is missing");
        }
    }

    startEdit() {
        this.originalIndicator = Object.assign({}, this.indicatorInfo);
        this.editMode = true;

        ValidationRules
            .ensure((m: IndicatorInfo) => m.description).displayName("Indicator Name").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: IndicatorInfo) => m.chartColor).displayName('Line Color').required().withMessage(`\${$displayName} cannot be blank.`)
            .matches(/^#[0-9a-fA-F]{6}$/).withMessage(`\${$displayName} value should be in format: #AAFF99.`)

            .on(this.indicatorInfo);

    }

    cancelEdit() {
        if (this.indicatorInfo.indicatorId > 0) {
            this.indicatorInfo = this.originalIndicator;
            this.editMode = false;
        } else {
            this.indicatorInfo.deleted = true;
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
            this.editMode = false;
            this.expanded = false;
            toastr.success(`indicator ${response.name} saved successfully!`, "Indicator Saved");
        }
    }

}

