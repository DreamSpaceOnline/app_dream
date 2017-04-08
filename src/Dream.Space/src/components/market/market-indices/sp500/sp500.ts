import { autoinject } from "aurelia-framework";
import {AccountService} from "../../../../services/account-service";

@autoinject()
export class Sp500 {
    powerUser = false;

    constructor(account: AccountService) {
        this.powerUser = account.currentUser.isAuthenticated;
    }

}