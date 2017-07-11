import { autoinject } from "aurelia-framework";
import { Router } from "aurelia-router";
import { EventEmitter } from "../../../../infrastructure/event-emitter";

@autoinject()
export class StudyActions {
    powerUser: boolean;
    editMode: boolean;

    constructor(private readonly eventEmitter: EventEmitter,
        private readonly router: Router) {

        this.powerUser = true;
    }

    startEdit() {
        this.eventEmitter.publish("Article-StartEdit");
    }

    cancelEdit() {
        this.eventEmitter.publish("Article-CancelEdit");    }

    saveArticle() {
        this.eventEmitter.publish("Article-Save");    }
    
    manageCategories() {
        this.router.navigateToRoute("categories");
    }
}