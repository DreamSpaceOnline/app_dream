import {LinkInfo} from "../../../resources/elements/strategy/strategy-navigation";

export class StockIndices {
    items: LinkInfo[] = [];

    constructor() {

        const sp500: LinkInfo = {
            isActive: true,
            title: "S&P 500 Index",
            url: "/global/sp500",
            name: "S&P 500"
        };

        this.items.push(sp500);
    }
}