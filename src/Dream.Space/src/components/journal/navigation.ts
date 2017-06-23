import { autoinject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import { Router } from "aurelia-router";

@autoinject
export class Navigation {

    router: Router;
    section: string;
    url = "";

    constructor(private eventAggregator: EventAggregator) {
    }

    configureRouter(config: any, router: Router) {
        config.title = "Journal";

        config.map([
            { route: ["",":period"], moduleId: "./journals/journals", name: "journals", title: "Journals", nav: false },
            { route: ["create"], moduleId: "./journals/journal/journal", name: "create-journal", title: "Create Journal", nav: false },
            { route: ["journal/:id"], moduleId: "./journals/journal/journal", name: "view-journal", title: "View Journal", nav: false },
            { route: ["journal/:id/edit"], moduleId: "./journals/journal/journal", name: "edit-journal", title: "Edit Journal", nav: false }
        ]);

        this.router = router;
        this.section = config.title;
    }


    attached() {
        this.eventAggregator.publish("this.journalChangedEvent", this.url);
    }
}