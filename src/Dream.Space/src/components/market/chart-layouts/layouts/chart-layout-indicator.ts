import { autoinject, bindable } from "aurelia-framework";
import { EventEmitter, ILayoutIndicatorMoved } from "../../../../infrastructure/event-emitter";
import * as Enums from "../../../../common/types/enums";
import { LayoutIndicatorModel } from "../../../../services/services-generated";

@autoinject()
export class ChartLayoutIndicator {
    @bindable indicator: LayoutIndicatorModel;
    @bindable editMode: boolean;

    expanded = false;

    constructor(private readonly eventEmitter: EventEmitter) {

    }

    toggleExpand() {
        this.expanded = !this.expanded;
    }


    onMoveUp() {
        const event: ILayoutIndicatorMoved = {
            direction: Enums.Direction.Up,
            indicatorId: this.indicator.indicatorId,
            layoutId: this.indicator.plotId
        };

        this.eventEmitter.publish("LayoutIndicatorMoved", event);
    }

    onMoveDown() {
        const event: ILayoutIndicatorMoved = {
            direction: Enums.Direction.Down,
            indicatorId: this.indicator.indicatorId,
            layoutId: this.indicator.plotId
        };

        this.eventEmitter.publish("LayoutIndicatorMoved", event);
    }
}