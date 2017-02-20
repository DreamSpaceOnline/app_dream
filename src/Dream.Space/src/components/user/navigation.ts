import { Router } from "aurelia-router";

export class Navigation {

    router: Router;

    configureRouter(config, router) {
        config.title = 'Login';

        config.map([
            { route: ['', 'login'], moduleId: "./login", name: "user-login", title: "Login", nav: false }
        ]);

        this.router = router;
    }
}

