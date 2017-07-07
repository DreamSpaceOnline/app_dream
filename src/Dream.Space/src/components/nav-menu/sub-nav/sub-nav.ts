import { bindable, autoinject } from "aurelia-framework";
import { EventAggregator } from 'aurelia-event-aggregator';
import { AccountService} from "../../../services/account-service";
import { Router } from "aurelia-router";

@autoinject
export class SubNav {
    @bindable router: Router;
    powerUser: boolean;

    constructor(private readonly account: AccountService, private readonly eventAggregator: EventAggregator) {
        this.powerUser = this.account.currentUser.isAuthenticated;
    }

    publishEvent(channel: string, params: any) {
        this.eventAggregator.publish(channel, params);
    }


    attached() {
    }

}