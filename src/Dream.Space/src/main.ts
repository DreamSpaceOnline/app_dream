import { Aurelia } from "aurelia-framework"
import environment from "./environment";
import { configureCommonStartup } from "./startup";

export async function configure(aurelia: Aurelia) {

    configureCommonStartup(aurelia);

    if (environment.debug) {
        aurelia.use.developmentLogging();
    }

    if (environment.testing) {
        aurelia.use.plugin("aurelia-testing");
    }

    await aurelia.start();
    await aurelia.setRoot();
}
