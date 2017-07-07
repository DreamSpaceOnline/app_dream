import { autoinject } from "aurelia-framework";
import { AccountService } from "../../../../services/account-service";
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { EnumValues, IdName } from "../../../../common/helpers/enum-helper";
import { ValidationRules, ValidationController, validateTrigger } from "aurelia-validation";
import { BootstrapFormRenderer } from "../../../../form-validation/bootstrap-form-renderer";
import {ChartLayoutModel, LayoutApiClient } from "../../../../services/services-generated";

@autoinject()
export class ChartLayouts {

    powerUser = false;
    subscriptions: Subscription[] = [];
    router: Router = null;
    layouts: ChartLayoutModel[] = [];
    title = "";
    period: IdName;
    editMode = false;
    addingMode = false;

    newLayout: ChartLayoutModel;

    constructor(account: AccountService, private readonly eventAggregator: EventAggregator,
        private readonly layoutService: LayoutApiClient, private readonly validation: ValidationController ) {


        this.powerUser = account.currentUser.isAuthenticated;
        this.subscribe();

        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new BootstrapFormRenderer());
    }

    onNavigatioComplete() {
        this.title = this.router.currentInstruction.config.title;
        const periodUrl = this.router.currentInstruction.config.name;
        this.period = EnumValues.getQuotePeriod(periodUrl);

        this.loadLayouts();
    }

    activate(params: any, routeconfig: RouteConfig, navigationInstruction: NavigationInstruction) {
        this.router = navigationInstruction.router;
        if (params && routeconfig) {

        }
    }


    subscribe() {
        this.subscriptions.push(this.eventAggregator.subscribe("router:navigation:complete", () => {
            this.onNavigatioComplete();
        }));
    }


    detached() {
        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach(subscription => {
                subscription.dispose();
            });
        }
    }

    async loadLayouts() {
        this.layouts = await this.layoutService.getLayoutsForPeriod(this.period.id);
    }   

    addLayout() {
        this.addingMode = true;
        this.newLayout = new ChartLayoutModel();
        this.newLayout.period = this.period.id;

        this.startEdit(this.newLayout);
    }

    async confirmAddLayout() {
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

    startEdit(layout: ChartLayoutModel) {
        this.editMode = true;

        ValidationRules
            .ensure((u: ChartLayoutModel) => u.title).displayName("Layout name").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((u: ChartLayoutModel) => u.description).displayName("Description").required().withMessage(`\${$displayName} cannot be blank.`)
            .on(layout);

        this.validation.reset();

    }

    cancelAddLayout() {
        this.addingMode = false;
    }

    async saveLayout() {
        await this.layoutService.saveLayout(this.newLayout);

        this.addingMode = false;
    }

}