import { HttpClient } from "aurelia-fetch-client";
import { Aurelia } from "aurelia-framework"
import environment from "./environment";
import { ErrorInterceptor } from "./infrastructure/error-interceptor";
import { AccountService } from "./services/account/account-service";
import { SettingsService } from "./services/settings/settings-service";


(<any>Promise).config({
  warnings: {
    wForgottenReturn: false
  }
});

export async function configure(aurelia: Aurelia) {

    const httpClient = aurelia.container.get(HttpClient) as HttpClient;
    const errorInterceptor = aurelia.container.get(ErrorInterceptor) as ErrorInterceptor;

    httpClient.configure(config => {
        config
            .useStandardConfiguration()
            .withBaseUrl("api/")
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
        .plugin('aurelia-dialog',
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

    aurelia.start().then(() => aurelia.setRoot());
}
