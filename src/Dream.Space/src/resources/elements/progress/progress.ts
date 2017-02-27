import { bindable } from "aurelia-framework";
import { inject } from 'aurelia-framework';
import { PlaygroundRuleSetInfo } from "../../../common/types/playground-models";

@inject(Element)
export class Progress {
    @bindable ruleset: PlaygroundRuleSetInfo;

    constructor(private element: Element) {
    }

    rulesetChanged() {
        this.bind();
    }

    bind() {
        const el = $(this.element).children()[0];
        $(el).css("width", `${this.ruleset.progress}%`);
    }

    unbind() {
    }
}
