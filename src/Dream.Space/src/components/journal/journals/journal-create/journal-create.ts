import { autoinject, bindable } from "aurelia-framework";
import { ValidationRules, ValidationController, validateTrigger } from "aurelia-validation"
import { EnumValues, IdName } from "../../../../common/helpers/enum-helper";
import { JournalModel } from "../../../../services/services-generated";
import { BootstrapFormRenderer } from "../../../../form-validation/bootstrap-form-renderer";

@autoinject()
export class JournalCreate {
    directions: IdName[];
    journal: JournalModel;
    @bindable entryDatePicker: any;

    constructor(private readonly validation: ValidationController) {

        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new BootstrapFormRenderer());

        this.directions = EnumValues.getDirectionTypes();
        this.journal = new JournalModel();

        ValidationRules
            .ensure((m: JournalModel) => m.ticker).displayName("Ticker").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: JournalModel) => m.entryDate).displayName("Entry date").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: JournalModel) => m.takeProfitPrice).displayName("Target price").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: JournalModel) => m.entryPrice).displayName("Entry price").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: JournalModel) => m.stopLossPrice).displayName("Stop loss price").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: JournalModel) => m.maxRiskValuePrice).displayName("Risk value($)").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: JournalModel) => m.rewardRiskRatio).displayName("Reward / Risk ratio").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: JournalModel) => m.maxSharesCount).displayName("Max shares count").required().withMessage(`\${$displayName} cannot be blank.`)

            .on(this.journal);
    }



    async trySaveJournal() {
        const response = await this.validation.validate();
        if (response.valid) {
        }
    }

    cancelEdit() {
        
    }
}