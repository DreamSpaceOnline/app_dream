import { Router } from "aurelia-router";

export class Navigation {

    router: Router;

    configureRouter(config, router) {
        config.title = 'Login';

        config.map([
            { route: ["", "login"], moduleId: "./login", name: "user-login", title: "Login", nav: false },
            {
                route: ["profile"],
                moduleId: "./profile",
                name: "user-profile",
                title: "Profile",
                nav: false,
                auth: true
            }
        ]);

        this.router = router;
    }
}

