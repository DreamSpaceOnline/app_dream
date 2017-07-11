import { autoinject } from "aurelia-framework";
import { Router } from "aurelia-router";

@autoinject
export class Navigation {

    router: Router;
    section: string;

    configureRouter(config: any, router: Router) {
        config.title = "Global Markets";


        config.map([
            { route: ["indices"], moduleId: "./market-indices/navigation", name: "market-indices", title: "Market Indices", nav: true },
            { route: ["jobs"], moduleId: "./jobs-dashboard/navigation", name: "jobs-dashboard", title: "Jobs Dashboard", nav: true },
            { route: ["layouts"], moduleId: "./chart-layouts/navigation", name: "chart-layouts", title: "Chart Layouts", nav: true },
            { route: "", redirect: "indices" }
        ]);

        this.router = router;
        this.section = config.title;
    }

}