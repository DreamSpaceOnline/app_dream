import { autoinject, bindable } from "aurelia-framework";
import { LayoutIndicatorInfo } from "../../../../common/types/layout-models";

@autoinject()
export class ChartLayoutIndicator {
    @bindable indicator: LayoutIndicatorInfo;
    @bindable editMode: boolean;

    expanded = false;

    constructor() {

    }

    toggleExpand() {
        this.expanded = !this.expanded;
    }


    onMoveUp() {

    }

    onMoveDown() {

    }
}