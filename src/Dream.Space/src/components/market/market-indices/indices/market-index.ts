﻿import { autoinject } from "aurelia-framework";
import { AccountService } from "../../../../services/account-service";
import { CompanyService } from "../../../../services/company-service";
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import {CompanyInfo} from "../../../../common/types/company-models";

@autoinject()
export class MarketIndex {
    powerUser = false;
    subscription: Subscription = null;
    router: Router = null;
    title = "";
    indexUrl = "";
    indexInfo: CompanyInfo = null;

    constructor(account: AccountService, eventAggregator: EventAggregator, private companyService: CompanyService) {
        this.powerUser = account.currentUser.isAuthenticated;

        this.subscription = eventAggregator.subscribe("router:navigation:complete", () => {
            this.onNavigatioComplete();
        });
    }

    onNavigatioComplete() {
        this.title = this.router.currentInstruction.config.title;
        this.indexUrl = this.router.currentInstruction.config.name;
        this.loadIndex();
    }

    activate(params, routeconfig: RouteConfig, navigationInstruction: NavigationInstruction) {
        this.router = navigationInstruction.router;
        if (params && routeconfig) {

        }
    }

    detached() {
        this.subscription.dispose();
    }


    async loadIndex() {
        this.indexInfo = await this.companyService.getCompany(this.indexUrl);
    }
}