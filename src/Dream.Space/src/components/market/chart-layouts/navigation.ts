import { autoinject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";

@autoinject
export class Navigation {

    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = "Chart Layouts";


        config.map([
            { route: ["weekly"], moduleId: "./layouts/chart-layouts", name: "Weekly", title: "Weekly Chart Layouts", nav: true },
            { route: ["daily"], moduleId: "./layouts/chart-layouts", name: "Daily", title: "Daily Chart Layouts", nav: true },
            { route: "", redirect: "weekly" }
        ]);

        this.router = router;
    }


}