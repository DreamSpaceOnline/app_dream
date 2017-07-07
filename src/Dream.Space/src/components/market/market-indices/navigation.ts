import { autoinject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";

@autoinject
export class Navigation {

    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = "Market Indices";


        config.map([
            { route: ["sp500"], moduleId: "./indices/market-index", name: "^GSPC", title: "S&P 500 Index", nav: true },
            { route: ["ftse100"], moduleId: "./indices/market-index", name: "^FTSE", title: "FTSE 100", nav: true },
            { route: ["dow-jones"], moduleId: "./indices/market-index", name: "^DJI", title: "Dow Jones Industrial", nav: true },
            { route: ["nasdaq"], moduleId: "./indices/market-index", name: "^IXIC", title: "NASDAQ Composite", nav: true },
            { route: ["nyse"], moduleId: "./indices/market-index", name: "^NYA", title: "NYSE Composite", nav: true },
            { route: "", redirect: "sp500" }
        ]);

        this.router = router;
    }


}