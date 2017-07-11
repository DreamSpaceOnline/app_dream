import { autoinject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";
import { AuthorizePipelineStep } from "./authorize-pipeline-step";

@autoinject
export class App {

    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {

        config.title = "Dream Space";
        config.options.pushState = true;
        this.router = router;
        config.addPipelineStep("authorize", AuthorizePipelineStep);

        config.map([
            { route: ["user"], moduleId: "./components/user/navigation", name: "user", title: "Login", nav: false },
            { route: ["studies"], moduleId: "./components/studies/navigation", name: "studies", title: "Studies", nav: true },
            { route: ["journals"], moduleId: "./components/journal/navigation", name: "journals", title: "Journals", nav: true },
            { route: ["markets"], moduleId: "./components/market/navigation", name: "markets", title: "Markets", nav: true },
            { route: ["strategies"], moduleId: "./components/strategies/navigation", name: "strategies", title: "Strategies", nav: true, auth: true },
            { route: ["categories"], moduleId: "./components/categories/navigation", name: "categories", title: "Categories", nav: false },
            { route: "", redirect: "studies" }

        ]);
    }

}

