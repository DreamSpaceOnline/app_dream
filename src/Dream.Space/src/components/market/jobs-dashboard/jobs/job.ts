import { autoinject, transient } from "aurelia-framework";
import {AccountService} from "../../../../services/account-service";
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";

@transient()
@autoinject()
export class Job {
    powerUser = false;
    title = "Job Dashboard";
    subscription: Subscription;
    router: Router;

    constructor(account: AccountService, eventAggregator: EventAggregator) {
        this.powerUser = account.currentUser.isAuthenticated;

        this.subscription = eventAggregator.subscribe("router:navigation:complete", () => {
            this.onNavigatioComplete();
        });
    }

    activate(params, routeconfig: RouteConfig, navigationInstruction: NavigationInstruction) {
        this.router = navigationInstruction.router;
        if (params && routeconfig) {

        }
    }

    detached() {
        this.subscription.dispose();
    }

    onNavigatioComplete() {
        this.title = this.router.currentInstruction.config.title;
    }

}