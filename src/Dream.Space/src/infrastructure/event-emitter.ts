import { autoinject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import * as Enums from "../common/types/enums";
import { NavigationInstruction } from "aurelia-router";


@autoinject
export class EventEmitter {

    constructor(private eventAggregator: EventAggregator) {

    }

    publish(eventType: "ServerError", data: IServerError): any;
    publish(eventType: "ValidationError", data: IValidationError): any;
    publish(eventType: "LayoutIndicatorMoved", data: ILayoutIndicatorMoved): any;
    publish(eventType: "Article-StartEdit", data?: IArticleEvent): any;
    publish(eventType: "Article-CancelEdit", data?: IArticleEvent): any;
    publish(eventType: "Article-Save", data?: IArticleEvent): any;

    publish(eventType: EventType, data?: any): any {
        this.eventAggregator.publish(eventType, data);
    }

    subscribe(eventType: "ServerError", handler: (event: IServerError) => void): any;
    subscribe(eventType: "ValidationError", handler: (event: IValidationError) => void): any;
    subscribe(eventType: "LayoutIndicatorMoved", handler: (event: ILayoutIndicatorMoved) => void): any;
    subscribe(eventType: "Article-StartEdit", handler: (event?: IArticleEvent) => void): any;
    subscribe(eventType: "Article-CancelEdit", handler: (event?: IArticleEvent) => void): any;
    subscribe(eventType: "Article-Save", handler: (event?: IArticleEvent) => void): any;
    subscribe(eventType: "router:navigation:complete", handler: (event?: INavigationEvent) => void): any;

    subscribe(eventType: EventType, handler: (event?: any) => void): any{
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
    "Article-Save" | 
    "router:navigation:complete";

export interface INavigationEvent {
    instruction: NavigationInstruction
}

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