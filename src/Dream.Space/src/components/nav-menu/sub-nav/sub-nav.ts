import { bindable, autoinject } from "aurelia-framework";
import { EventAggregator } from 'aurelia-event-aggregator';
import {AccountService} from "../../../services/account-service";

@autoinject
export class SubNav {
    @bindable router;
    powerUser: boolean;

    constructor(private readonly account: AccountService, private readonly eventAggregator: EventAggregator) {
        this.powerUser = this.account.currentUser.isAuthenticated;
    }

    publishEvent(channel, params) {
        this.eventAggregator.publish(channel, params);
    }


    attached() {
    }

}