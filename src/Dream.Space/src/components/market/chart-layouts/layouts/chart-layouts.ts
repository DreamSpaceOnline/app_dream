import { autoinject } from "aurelia-framework";
import { AccountService } from "../../../../services/account-service";
import { LayoutService } from "../../../../services/layout-service";
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { LayoutInfo } from "../../../../common/types/layout-models";
import {EnumValues, IdName } from "../../../../common/helpers/enum-helper";
import {QuotePeriod} from "../../../../common/types/enums";

@autoinject()
export class ChartLayouts {

    powerUser = false;
    subscriptions: Subscription[] = [];
    router: Router = null;
    layouts: LayoutInfo[] = [];
    title = "";
    period: IdName;

    newLayout: LayoutInfo;

    constructor(account: AccountService, private eventAggregator: EventAggregator, private layoutService: LayoutService) {
        this.powerUser = account.currentUser.isAuthenticated;
        this.subscribe();

        if (this.layoutService) {
            
        }
    }

    onNavigatioComplete() {
        this.title = this.router.currentInstruction.config.title;
        const periodUrl = this.router.currentInstruction.config.name;
        this.period = EnumValues.getQuotePeriod(periodUrl);

        this.loadLayouts();
    }

    activate(params, routeconfig: RouteConfig, navigationInstruction: NavigationInstruction) {
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
        this.layouts = await this.layoutService.getLayouts(this.period.id);
    }   

    addLayout() {
        this.newLayout = new LayoutInfo();
        this.newLayout.period = this.period.id;
    }

}