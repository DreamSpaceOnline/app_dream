import { autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";

@autoinject
export class LayoutService {


    constructor(private http: HttpClient) {
        if (this.http != null) {
            
        }
    }



}

