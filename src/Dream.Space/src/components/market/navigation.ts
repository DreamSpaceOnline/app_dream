import { autoinject } from "aurelia-framework";
import { EventAggregator } from 'aurelia-event-aggregator';
import { Router } from "aurelia-router";

@autoinject
export class Navigation {

    router: Router;
    section: string;
    url = "";

    constructor(private eventAggregator: EventAggregator) {
    }

    configureRouter(config: any, router: Router) {
        config.title = "Global Markets";


        config.map([
            { route: ["sp500"], moduleId: "./market-indices/sp500/sp500", name: "market-indices-sp500", title: "S&P 500 Index", nav: true },
            { route: ["jobs"], moduleId: "./jobs-dashboard/navigation", name: "jobs-dashboard", title: "Jobs Dashboard", nav: true },
            { route: "", redirect: "sp500" }
        ]);

        this.router = router;
        this.section = config.title;
    }


    attached() {
        this.eventAggregator.publish("this.marketChangedEvent", this.url);
    }
}