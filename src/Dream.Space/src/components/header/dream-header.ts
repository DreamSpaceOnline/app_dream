import { autoinject, bindable } from "aurelia-framework";
import { Router } from "aurelia-router";
import { DialogService } from "aurelia-dialog";
import { UserLogin, UserLoginModel } from "../../dialogs/login/user-login";
import { UserInfo, AccountApiClient } from "../../services/services-generated";

@autoinject
export class DreamHeader {
    @bindable
    router: Router;
    user: UserInfo;
    loginUrl: string;


    constructor(
        private readonly account: AccountApiClient,
        private readonly dialogService: DialogService) {
    }

    async attached() {
        this.user = await this.account.currentUser();
        this.loginUrl = this.router.generate("user") + "/profile";
    }

    async logout() {
        await this.account.logout();
        window.location.href = "/";
    }

    login() {
        const model = new UserLoginModel();
        this.dialogService.open({ viewModel: UserLogin, model: model }).whenClosed(response => {
            if (!response.wasCancelled) {
                window.location.reload();
            }
        });
    }
}