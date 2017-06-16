import { autoinject, bindable } from "aurelia-framework";
import { Router } from "aurelia-router";
import { DialogService } from "aurelia-dialog";
import {AccountService} from "../../services/account-service";
import {UserLogin, UserLoginModel } from "../../dialogs/login/user-login";
import {UserInfo} from "../../services/services-generated";

@autoinject
export class DreamHeader {
    @bindable router: Router;
    user: UserInfo;
    isAuthenticated: boolean;
    loginUrl: string;


    constructor(private readonly account: AccountService, private readonly dialogService: DialogService) {
        this.user = this.account.currentUser;
    }

    attached() {
        this.isAuthenticated = this.user.isAuthenticated;

        this.loginUrl = this.router.generate("user") + "/profile";
    }

    async logout() {
        await this.account.logout();
        window.location.href = "/";
    }

    async login() {
        const model = new UserLoginModel();
        const response = await this.dialogService.open({ viewModel: UserLogin, model: model });
        if (!response.wasCancelled) {
            window.location.reload();
        }
    }
}