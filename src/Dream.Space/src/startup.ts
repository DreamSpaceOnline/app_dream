import { Aurelia } from "aurelia-framework"
import { HttpClient } from "aurelia-fetch-client";
import { ErrorInterceptor } from "./infrastructure/error-interceptor";
import { DialogConfiguration } from "aurelia-dialog";

export async function configureCommonStartup(aurelia: Aurelia, resourcePathResolver: (path: string) => string = path => path) {
    const errorInterceptor = aurelia.container.get(ErrorInterceptor) as ErrorInterceptor;
    const httpClient = aurelia.container.get(HttpClient) as HttpClient;
    httpClient.configure((config: any) => {
        config
            .useStandardConfiguration()
            .withInterceptor(errorInterceptor);
    });

    aurelia.use
        .standardConfiguration()
        .plugin("aurelia-dialog", (config: DialogConfiguration) => {
            config.useDefaults();
            config.settings.lock = false;
            config.settings.keyboard = "Escape";
        })
        .plugin("aurelia-validation")
        .plugin("aurelia-bootstrap-datetimepicker", (config: any) => {
            config.extra.withDateIcon = false;
            config.options.format = "DD MMM YYYY";
        })
        .feature(resourcePathResolver("resources"));
}
