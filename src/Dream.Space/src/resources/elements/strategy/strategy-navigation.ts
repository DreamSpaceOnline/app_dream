import { autoinject, bindable } from "aurelia-framework";
import { Router } from 'aurelia-router';
import { EventAggregator, Subscription } from 'aurelia-event-aggregator';

@autoinject
export class StrategyNavigation {

    @bindable strategychangedevent;
    subscription: Subscription = null;
    items: LinkInfo[] = [];

    constructor(private router: Router, private eventAggregator: EventAggregator) {
    }

    strategychangedeventChanged(newValue) {
        if (this.subscription) {
            this.subscription.dispose();
        }

        this.subscription = this.eventAggregator.subscribe(newValue, url => this.onStrategyChanged(url));
    }

    detached() {
        if (this.subscription) {
            this.subscription.dispose();
        }
    }

    onStrategyChanged(url: string) {
        const currentModuleName = this.router.currentInstruction.config.name;
        this.items = [];

        let strategyMenuItem: LinkInfo  =
            {
                isActive: currentModuleName === "strategy",
                title: "Strategy Article",
                url: "/strategies/strategy/" + url,
                name: "strategy"
            }

        let rulesetsMenuItem: LinkInfo = {
            isActive: currentModuleName === "strategy-rule-sets",
            title: "Strategy Rule Sets",
            url: "/strategies/strategy-rule-sets/" + url,
            name: "rule-sets"
        }

        let playgroundMenuItem: LinkInfo = {
            isActive: currentModuleName === "strategy-playground",
            title: "Playground",
            url: "/strategies/strategy-playground/" + url,
            name: "strategy-playground"
        }

        this.items.push(strategyMenuItem);
        this.items.push(rulesetsMenuItem);
        this.items.push(playgroundMenuItem);
    }

}

export class LinkInfo {
    isActive?: boolean;
    title: string;
    url: string;
    name: string;

    constructor() {
        this.isActive = false;
    }
}