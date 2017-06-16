import { autoinject } from "aurelia-framework";
import { Router, RedirectToRoute } from "aurelia-router";
import {AccountService} from "./services/account-service";
import {SettingsService} from "./services/settings-service";
import {UserInfo} from "./services/services-generated";

@autoinject
export class App {

    router: Router;
    user: UserInfo;

    constructor(private account: AccountService) {
        this.user = this.account.currentUser;
    }

    configureRouter(config, router: Router) {

        config.title = "Dream Space";
        config.options.pushState = true;
        this.router = router;
        config.addPipelineStep("authorize", AuthorizeStep);

        config.map([
            { route: ["user"], moduleId: "./components/user/navigation", name: "user", title: "Login", nav: false },
            { route: ["studies"], moduleId: "./components/studies/navigation", name: "studies", title: "Studies", nav: true },
            { route: ["markets"], moduleId: "./components/market/navigation", name: "markets", title: "Markets", nav: true },
            { route: ["strategies"], moduleId: "./components/strategies/navigation", name: "strategies", title: "Strategies", nav: true, auth: true },
            { route: ["categories"], moduleId: "./components/categories/navigation", name: "categories", title: "Categories", nav: false },
            { route: "", redirect: "studies" }

        ]);
    }

}

@autoinject
class AuthorizeStep {

    isAuthenticated: boolean;
    homePage: string;

    constructor(account: AccountService, settings: SettingsService) {
        this.isAuthenticated = account.currentUser.isAuthenticated;
        this.homePage = settings.homePage;
    }

    run(navigationInstruction, next) {
        if (navigationInstruction.getAllInstructions().some(i => i.config.auth)) {

            if (this.isAuthenticated) {
                return next();
            } else {
                return next.cancel(new RedirectToRoute("user"));
            }
        } else {
            if (navigationInstruction.getAllInstructions()
                .some(i => i.config.name === "user-login" && this.isAuthenticated)) {
                return next.cancel(new RedirectToRoute(this.homePage));
            }
            return next();
        }
    }

}
