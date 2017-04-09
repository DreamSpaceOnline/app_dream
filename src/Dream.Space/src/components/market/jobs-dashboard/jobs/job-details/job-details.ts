import { autoinject, bindable } from "aurelia-framework";

@autoinject()
export class JobDetails {

    @bindable job: JobInfo;

    expanded = false;

    expand() {
        this.expanded = !this.expanded;
    }

    delete() {

    }

    get completed() {
        return "2/10/2017 18:23 PM"; 
    }

    get status() {
        return "Successful";
    }

    get runTime() {
        return "1hr 42m";
    }
}

export interface JobInfo {
    jobId: number;
}