import { autoinject } from "aurelia-framework";
import { RedirectToRoute, NavigationInstruction, Next } from "aurelia-router";
import { UserInfo, AccountApiClient } from "./services/services-generated";

@autoinject
export class AuthorizePipelineStep {
    user: UserInfo;
    homePage = "/";

    constructor(private readonly account: AccountApiClient) {
    }

    async run(navigationInstruction: NavigationInstruction, next: Next) {

        this.user = await this.account.currentUser();

        if (navigationInstruction.getAllInstructions().some(i => i.config.auth)) {

            if (this.user.isAuthenticated) {
                return next();
            } else {
                return next.cancel(new RedirectToRoute("user"));
            }
        } else {
            if (navigationInstruction.getAllInstructions()
                .some(i => i.config.name === "user-login" && this.user.isAuthenticated)) {
                return next.cancel(new RedirectToRoute(this.homePage));
            }
            return next();
        }
    }

}
