import { autoinject } from "aurelia-framework";
import { AccountService } from "../../../../services/account-service";
import { LayoutService } from "../../../../services/layout-service";
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";

@autoinject()
export class ChartLayout {
    powerUser = false;
    subscription: Subscription = null;
    router: Router = null;
    title = "";
    indexUrl = "";

    constructor(account: AccountService, eventAggregator: EventAggregator, private layout: LayoutService) {
        this.powerUser = account.currentUser.isAuthenticated;

        this.subscription = eventAggregator.subscribe("router:navigation:complete", () => {
            this.onNavigatioComplete();
        });

        if (this.layout) {
            
        }
    }

    onNavigatioComplete() {
        this.title = this.router.currentInstruction.config.title;
        this.indexUrl = this.router.currentInstruction.config.name;
        this.loadLayouts();
    }

    activate(params, routeconfig: RouteConfig, navigationInstruction: NavigationInstruction) {
        this.router = navigationInstruction.router;
        if (params && routeconfig) {

        }
    }

    detached() {
        this.subscription.dispose();
    }


    async loadLayouts() {
        //this.indexInfo = await this.companyService.getCompany(this.indexUrl);
    }   
}