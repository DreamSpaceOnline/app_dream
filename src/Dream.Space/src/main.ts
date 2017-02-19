import { HttpClient } from "aurelia-fetch-client";
import { Aurelia } from "aurelia-framework"
import environment from "./environment";
import { ErrorInterceptor } from "./infrastructure/error-interceptor";

(<any>Promise).config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia: Aurelia) {
    const httpClient = aurelia.container.get(HttpClient) as HttpClient;
    const errorInterceptor = aurelia.container.get(ErrorInterceptor) as ErrorInterceptor;

    httpClient.configure(config => {
        config
            .useStandardConfiguration()
            .withBaseUrl("api/")
            .withInterceptor(errorInterceptor);
    });


    aurelia.use
        .standardConfiguration()
        .feature("resources");

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin("aurelia-testing");
  }

  aurelia.start().then(() => aurelia.setRoot());
}
