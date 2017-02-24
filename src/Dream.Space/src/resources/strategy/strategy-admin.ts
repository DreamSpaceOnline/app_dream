import { autoinject } from "aurelia-framework";
import {AccountService} from "../../services/account-service";

@autoinject
export class StrategyAdmin {

    powerUser: boolean;

    constructor(account: AccountService) {
        this.powerUser = account.currentUser.isAuthenticated;
    }

}