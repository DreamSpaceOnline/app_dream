import { HttpClient } from 'aurelia-fetch-client';
import { Aurelia } from 'aurelia-framework'
import environment from './environment';

(<any>Promise).config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia: Aurelia) {
    let httpClient = aurelia.container.get(HttpClient) as HttpClient;

    httpClient.configure(config => {
        config
            .useStandardConfiguration()
            .withBaseUrl('api/')
            .withInterceptor({
                request(request) {
                    return request;
                },
                response(response) {
                    //return responseInterceptor.intercept(response);
                    return response;
                }
            });
    });


    aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
