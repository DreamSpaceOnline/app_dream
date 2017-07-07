import { autoinject } from "aurelia-framework";
import { DialogController } from "aurelia-dialog";
import { ValidationRules, ValidationController, validateTrigger } from "aurelia-validation"
import { BootstrapFormRenderer } from "../../form-validation/bootstrap-form-renderer";
import { BindingEngine, Disposable } from 'aurelia-binding';
import { AccountService } from "../../services/account-service";
import { LoginStatus } from "../../services/services-generated";

@autoinject
export class UserLogin {

    loginFailed: boolean;
    model: UserLoginModel;
    subscriptions: Disposable[];

    constructor(public controller: DialogController, private validation: ValidationController, private account: AccountService, private bindingEngine: BindingEngine) {
        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new BootstrapFormRenderer());
    }

    attached() {
        this.subscriptions = [];
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.model, "email").subscribe(() => this.onChange()));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.model, "password").subscribe(() => this.onChange()));
    }

    detached() {
        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach(subscription => {
                subscription.dispose();
            });
        }
    }

    onChange() {
        this.loginFailed = false;
    }

    activate(model: UserLoginModel) {
        this.model = model;

        ValidationRules
            .ensure((m: UserLoginModel) => m.email).displayName("Email").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: UserLoginModel) => m.password).displayName("Password").required().withMessage(`\${$displayName} cannot be blank.`)
            .on(this.model);
    }

    async tryLogin() {
        if ((await this.validation.validate()).valid) {

            const response = await this.account.login(this.model.email, this.model.password);
            if (response.status === LoginStatus.Success) {
                this.controller.ok(this.model);
            } else {
                this.loginFailed = true;
            }
        }
    }
}

export class UserLoginModel {
    email: string;
    password: string;
}
