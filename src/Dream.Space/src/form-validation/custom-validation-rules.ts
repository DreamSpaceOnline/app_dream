import { ValidationRules } from "aurelia-validation"
import * as moment from "moment";

export class CustomValidationRules {

    register() {
        ValidationRules.customRule(
            'Date-DD/MM/YYYY',
            (value) => {
                var d = new Date(moment(value, 'D/M/YYYY', true).format());

                return value === null || value === undefined || value.trim() === '' || !isNaN(d.getTime());
            },
            `\${$displayName} must be in format (DD/MM/YYYY).`
        );
    }
}
