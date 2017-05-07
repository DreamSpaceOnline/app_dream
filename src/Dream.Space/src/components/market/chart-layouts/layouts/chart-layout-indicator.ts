import { autoinject, bindable } from "aurelia-framework";
import { LayoutIndicatorInfo } from "../../../../common/types/layout-models";
import { EventEmitter, LayoutIndicatorMoved } from "../../../../infrastructure/event-emitter";
import * as Enums from "../../../../common/types/enums";

@autoinject()
export class ChartLayoutIndicator {
    @bindable indicator: LayoutIndicatorInfo;
    @bindable editMode: boolean;

    expanded = false;

    constructor(private eventEmitter: EventEmitter) {

    }

    toggleExpand() {
        this.expanded = !this.expanded;
    }


    onMoveUp() {
        const event: LayoutIndicatorMoved = {
            direction: Enums.Direction.Up,
            indicatorId: this.indicator.indicatorId,
            layoutId: this.indicator.layoutId
        };

        this.eventEmitter.publish("LayoutIndicatorMoved", event);
    }

    onMoveDown() {
        const event: LayoutIndicatorMoved = {
            direction: Enums.Direction.Down,
            indicatorId: this.indicator.indicatorId,
            layoutId: this.indicator.layoutId
        };

        this.eventEmitter.publish("LayoutIndicatorMoved", event);
    }
}