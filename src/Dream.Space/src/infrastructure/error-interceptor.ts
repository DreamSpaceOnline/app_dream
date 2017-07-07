import { autoinject } from "aurelia-framework";
import { EventEmitter } from "./event-emitter";
import { Interceptor } from "aurelia-fetch-client";

@autoinject
export class ErrorInterceptor implements Interceptor {

    constructor(private eventEmitter: EventEmitter) {

    }

    response(response: Response) {
        if (response.status >= 500) {
            const message = `Received ${response.status} ${response.url}`;
            this.eventEmitter.publish("ServerError", { message: message });
        }

        if (response.status === 401) {
            window.location.href = "/";
        }

        if (response.status === 403) {
            //TODO: handle 403
        }

        return response;
    }

    request(request: Request) {
        const message = `${request.url}`;
            this.eventEmitter.publish("ServerError", { message: message });
            return request;
    }


    async responseError(response: Response, request?: Request): Promise<Response> {
        if (response.status === 400) {
            const validationError = (await response.json()).message;
            this.eventEmitter.publish("ValidationError", validationError);
            return Promise.reject(validationError);
        }

        if (response.status === 401) {
            this.eventEmitter.publish("ServerError", { message: "401" });
            return Promise.reject(null);
        }

        if (response.status === 403) {
            this.eventEmitter.publish("ServerError", { message: "NotAuthorised" });
            return Promise.reject(null);
        }

        if (response.status >= 500) {
            this.eventEmitter.publish("ServerError", { message: "Unhandled" });
            return Promise.reject(null);
        }
        if (request != null) {}

        return Promise.resolve(response);

    }

}