import { autoinject, bindable } from "aurelia-framework";
import { Router } from "aurelia-router";
import {AccountService} from "../../services/account/account-service";
import {UserInfo} from "../../services/account/account-models";

@autoinject
export class DreamHeader {
    @bindable router: Router;
    user: UserInfo;
    isAuthenticated: boolean;
    loginUrl: string;


    constructor(private account: AccountService) {
        this.user = this.account.currentUser;
    }

    attached() {
        this.isAuthenticated = this.user.isAuthenticated;

        this.loginUrl = this.router.generate("user") + '/view';
    }

    async logout() {
        await this.account.logout();
        window.location.href = "/";
    }

}