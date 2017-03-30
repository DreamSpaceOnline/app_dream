import { autoinject } from "aurelia-framework";
import {AccountService} from "../../services/account-service";

@autoinject()
export class GlobalMarkets {
    powerUser = false;

    constructor(account: AccountService) {
        this.powerUser = account.currentUser.isAuthenticated;
    }


    refreshSP500Stocks() {
        
    }

    refreshAllStocks() {
        
    }

    recalculateSP500Indicators() {
        
    }
}