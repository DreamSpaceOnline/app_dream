import { autoinject } from "aurelia-framework";
import { AccountService } from "../../../../services/account-service";
import { LayoutService } from "../../../../services/layout-service";
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { LayoutInfo } from "../../../../common/types/layout-models";

@autoinject()
export class ChartLayouts {
    powerUser = false;
    subscription: Subscription = null;
    router: Router = null;
    layouts: LayoutInfo[] = [];
    title = "";
    layoutUrl = "";

    constructor(account: AccountService, eventAggregator: EventAggregator, private layoutService: LayoutService) {
        this.powerUser = account.currentUser.isAuthenticated;

        this.subscription = eventAggregator.subscribe("router:navigation:complete", () => {
            this.onNavigatioComplete();
        });

        if (this.layoutService) {
            
        }
    }

    onNavigatioComplete() {
        this.title = this.router.currentInstruction.config.title;
        this.layoutUrl = this.router.currentInstruction.config.name;
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
        this.layouts = await this.layoutService.getLayouts(this.layoutUrl);
    }   
}