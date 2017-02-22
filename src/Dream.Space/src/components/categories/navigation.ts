import { Router } from "aurelia-router";

export class Navigation {
    router: Router;
    section: string;

    configureRouter(config, router: Router) {
        config.title = 'Categories';


        config.map([
            { route: ['', ':section'], moduleId: "./categories", name: "categories-list", title: "Manage Categories", nav: true }
        ]);

        this.router = router;
        this.section = config.title;
    }
}