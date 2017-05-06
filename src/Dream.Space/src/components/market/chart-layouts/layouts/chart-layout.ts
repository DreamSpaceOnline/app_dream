import { autoinject, bindable } from "aurelia-framework";
import { LayoutInfo, LayoutIndicatorInfo } from "../../../../common/types/layout-models";
import { IndicatorCore, IndicatorInfo } from "../../../../common/types/indicator-models";
import { ValidationRules, ValidationController, validateTrigger } from "aurelia-validation";
import { BootstrapFormRenderer } from "../../../../form-validation/bootstrap-form-renderer";
import { LayoutService } from "../../../../services/layout-service";
import { SettingsService } from "../../../../services/settings-service";


@autoinject()
export class ChartLayout {

    @bindable layout: LayoutInfo;
    originalLayout: LayoutInfo;
    definedIndicators: IndicatorCore[];

    expanded = false;
    editMode = false;
    addingMode = false;
    newIndicatorId: number = 0;

    constructor(private validation: ValidationController, private layoutService: LayoutService, private globalSettings: SettingsService) {
        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new BootstrapFormRenderer());
    }

    layoutChanged() {
        if (this.layout != null && this.layout.layoutId > 0) {
            this.definedIndicators = this.globalSettings.getIndicators(this.layout.period);
        }
    }

    toggleExpand() {
        this.expanded = !this.expanded;
    }

    startEdit() {
        this.editMode = true;
        this.originalLayout = Object.assign({}, this.layout) as LayoutInfo;

        ValidationRules
            .ensure((u: LayoutInfo) => u.title).displayName("Layout name").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((u: LayoutInfo) => u.description).displayName("Description").required().withMessage(`\${$displayName} cannot be blank.`)
            .on(this.layout);
    }

    async confirmSave() {
        let valid = false;

        const response = await this.validation.validate();
        if (response.valid) {
            valid = true;
        }
        if (valid) {
            this.saveLayout();

        } else {
            toastr.warning("Please correct validation errors.", "Validation Errors");
        }
    }

    cancelSave() {
        this.editMode = false;
        this.layout = this.originalLayout;
        this.validation.reset();
    }

    async saveLayout() {
        await this.layoutService.saveLayout(this.layout);

        this.editMode = false;
    }

    addIndicator() {
        this.addingMode = true;
    }

    confirmAddIndicator() {
        if (this.newIndicatorId > 0) {
            if (this.layout.indicators == null) {
                this.layout.indicators = [];
            }

            let ind = this.getIndicatorCore(this.newIndicatorId);

            let indicator = new LayoutIndicatorInfo();
            indicator.indicatorId = ind.id;
            indicator.layoutId = this.layout.layoutId;
            indicator.name = ind.name;
            indicator.id = 0;
            indicator.indicator = new IndicatorInfo();

            this.layout.indicators.push(indicator);

            this.addingMode = false;
        }
    }

    getIndicatorCore(indicatorId: number): IndicatorCore {
        return this.definedIndicators.find(i => i.id === indicatorId);
    }

    cancelAddIndicator() {
        this.addingMode = false;
    }
} 