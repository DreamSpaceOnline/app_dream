import { autoinject } from "aurelia-framework";
import { EventEmitter } from "./event-emitter";
import { Interceptor } from "aurelia-fetch-client";

@autoinject
export class ErrorInterceptor implements Interceptor {

    constructor(private eventEmitter: EventEmitter) {

    }

    response(response: Response) {
        if (response.status >= 500) {
            let message = `Received ${response.status} ${response.url}`;
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
        let message = `${request.url}`;
            this.eventEmitter.publish("ServerError", { message: message });
            return request;
    }

}