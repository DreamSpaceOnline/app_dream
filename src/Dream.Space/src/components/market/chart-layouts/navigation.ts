import { autoinject } from "aurelia-framework";
import { Router } from "aurelia-router";

@autoinject
export class Navigation {

    router: Router;

    configureRouter(config: any, router: Router) {
        config.title = "Chart Layouts";


        config.map([
            { route: ["weekly"], moduleId: "./layouts/chart-layout", name: "Weekly", title: "Weekly Charts Layout", nav: true },
            { route: ["daily"], moduleId: "./layouts/chart-layout", name: "Daily", title: "Daily Charts Layout", nav: true },
            { route: "", redirect: "weekly" }
        ]);

        this.router = router;
    }


}