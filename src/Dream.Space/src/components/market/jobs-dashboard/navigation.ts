import { autoinject } from "aurelia-framework";
import { Router } from "aurelia-router";

@autoinject
export class Navigation {

    router: Router;

    configureRouter(config: any, router: Router) {
        config.title = "Jobs";


        config.map([
            { route: ["recalculate-global-indicators"], moduleId: "./jobs/job", name: "recalculate-global-indicators", title: "Recalculate Global Indicators", nav: true },
            { route: ["refresh-sp500-stocks"], moduleId: "./jobs/job", name: "refresh-sp500-stocks", title: "Refresh SP500 Stocks", nav: true },
            { route: ["refresh-all-stocks"], moduleId: "./jobs/job", name: "refresh-all-stocks", title: "Refresh All Stocks", nav: true },
            { route: ["refresh-indices"], moduleId: "./jobs/job", name: "refresh-indices", title: "Refresh Indices", nav: true },
            { route: "", redirect: "recalculate-global-indicators" }
        ]);

        this.router = router;
    }


}