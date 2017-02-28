import { bindable, autoinject } from "aurelia-framework";

@autoinject
export class SProgress {
    @bindable progress: number;

    constructor(private element: Element) {
    }

    progressChanged() {
        this.bind();
    }

    bind() {
        const el = $(this.element).children()[0];
        $(el).css("width", `${this.progress}%`);
    }

    unbind() {
    }
}
