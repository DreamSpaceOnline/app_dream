import { HttpClient } from "aurelia-fetch-client";
import { Aurelia } from "aurelia-framework"
import environment from "./environment";
import { ErrorInterceptor } from "./infrastructure/error-interceptor";
import { UserService } from "./services/account/user-service";

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

    const userService = aurelia.container.get(UserService) as UserService;
    await userService.initialize();

    aurelia.use
        .standardConfiguration()
        .instance('User', userService)
        .feature("resources");

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin("aurelia-testing");
  }

  aurelia.start().then(() => aurelia.setRoot());
}
