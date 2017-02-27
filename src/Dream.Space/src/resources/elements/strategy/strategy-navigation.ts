import { autoinject } from "aurelia-framework";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { NavigationInstruction } from "aurelia-router";

@autoinject
export class StrategyNavigation {

    subscription: Subscription = null;
    items: LinkInfo[] = [];

    constructor(private eventAggregator: EventAggregator) {
        this.subscription = this.eventAggregator.subscribe("router:navigation:complete", (request) => {
            this.onNavigatioComplete(request.instruction);
        });
    }

    detached() {
        if (this.subscription) {
            this.subscription.dispose();
        }
    }


    onNavigatioComplete(instruction: NavigationInstruction) {
        if (instruction.config.name !== "strategies") return;

        const currentUrl = window.location.pathname;
        let page = "";

        const fragments = currentUrl.split("/");
        if (fragments.length > 3) {
            page = fragments[3];
        }

        this.items = [];

        const strategyMenuItem: LinkInfo = {
            isActive: currentUrl.startsWith("/strategies/strategy/"),
            title: "Strategy Article",
            url: "/strategies/strategy/" + page,
            name: "strategy"
        };

        const rulesetsMenuItem: LinkInfo = {
            isActive: currentUrl.startsWith("/strategies/strategy-rule-sets/"),
            title: "Strategy Rule Sets",
            url: "/strategies/strategy-rule-sets/" + page,
            name: "rule-sets"
        };

        const playgroundMenuItem: LinkInfo = {
            isActive: currentUrl.startsWith("/strategies/strategy-playground/"),
            title: "Playground",
            url: "/strategies/strategy-playground/" + page,
            name: "strategy-playground"
        };

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