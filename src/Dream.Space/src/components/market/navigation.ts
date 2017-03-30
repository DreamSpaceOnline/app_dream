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
            { route: ["", ":index"], moduleId: "./global-markets", name: "global-markets", title: "Global Markets", nav: true }
        ]);

        this.router = router;
        this.section = config.title;
    }


    attached() {
        this.eventAggregator.publish("this.marketChangedEvent", this.url);
    }
}