import { autoinject } from "aurelia-framework";
import {AccountService} from "../../../services/account-service";

@autoinject()
export class JobsDashboard {
    powerUser = false;
    progress = 60;

    constructor(account: AccountService) {
        this.powerUser = account.currentUser.isAuthenticated;
    }

    refreshSP500Stocks() {

    }

    refreshAllStocks() {

    }

    RecalculateGlobalIndicators() {

    }

}