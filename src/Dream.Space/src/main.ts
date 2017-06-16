import { HttpClient } from "aurelia-fetch-client";
import { Aurelia } from "aurelia-framework"
import environment from "./environment";
import { ErrorInterceptor } from "./infrastructure/error-interceptor";
import { AccountService } from "./services/account-service";
import { SettingsService } from "./services/settings-service";
import {CustomValidationRules} from "./form-validation/custom-validation-rules";
(<any>Promise).config({
  warnings: {
    wForgottenReturn: false
  }
});

export async function configure(aurelia: Aurelia) {

    const validationRules = aurelia.container.get(CustomValidationRules) as CustomValidationRules;
    validationRules.register();

    const httpClient = aurelia.container.get(HttpClient) as HttpClient;
    const errorInterceptor = aurelia.container.get(ErrorInterceptor) as ErrorInterceptor;

    httpClient.configure(config => {
        config
            .useStandardConfiguration()
            .withInterceptor(errorInterceptor);
    });

    const account = aurelia.container.get(AccountService) as AccountService;
    await account.initialize();

    const settings = aurelia.container.get(SettingsService) as SettingsService;
    await settings.initialize();

    aurelia.use
        .standardConfiguration()
        .instance("Account", account)
        .instance("Settings", settings)
        .feature("resources")
        .plugin("aurelia-dialog",
            config => {
                config.useDefaults();
                config.settings.lock = false;
                config.settings.enableEscClose = true;
            })
        .plugin('aurelia-validation');


    if (environment.debug) {
        aurelia.use.developmentLogging();
    }

    if (environment.testing) {
        aurelia.use.plugin("aurelia-testing");
    }

    await aurelia.start();
    //await new Promise(resolve => $(document).ready(() => resolve()));
    aurelia.setRoot();
}
