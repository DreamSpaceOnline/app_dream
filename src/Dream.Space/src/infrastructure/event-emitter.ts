import { autoinject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import * as Enums from "../common/types/enums";


@autoinject
export class EventEmitter {

    constructor(private eventAggregator: EventAggregator) {

    }

    publish(eventType: "ServerError", data: IServerError);
    publish(eventType: "ValidationError", data: IValidationError);
    publish(eventType: "LayoutIndicatorMoved", data: ILayoutIndicatorMoved);
    publish(eventType: "Article-StartEdit", data?: IArticleEvent);
    publish(eventType: "Article-CancelEdit", data?: IArticleEvent);
    publish(eventType: "Article-Save", data?: IArticleEvent);

    publish(eventType: EventType, data?: any) {
        this.eventAggregator.publish(eventType, data);
    }

    subscribe(eventType: "ServerError", handler: (event: IServerError) => void);
    subscribe(eventType: "ValidationError", handler: (event: IValidationError) => void);
    subscribe(eventType: "LayoutIndicatorMoved", handler: (event: ILayoutIndicatorMoved) => void);
    subscribe(eventType: "Article-StartEdit", handler: (event?: IArticleEvent) => void);
    subscribe(eventType: "Article-CancelEdit", handler: (event?: IArticleEvent) => void);
    subscribe(eventType: "Article-Save", handler: (event?: IArticleEvent) => void);

    subscribe(eventType: EventType, handler: (event?: any) => void) {
        return this.eventAggregator.subscribe(eventType, handler);
    }
}

type EventType =
    "ServerError" |
    "ValidationError" |
    "ChartData" |
    "LayoutIndicatorMoved" |
    "Article-StartEdit" |
    "Article-CancelEdit" |
    "Article-Save";


interface IValidationError {
    message: string[];
}

interface IServerError {
    message: string;
}

export interface ILayoutIndicatorMoved {
    direction: Enums.Direction;
    indicatorId: number;
    layoutId: number;
}

export interface IArticleEvent {
    articleId: number;
}