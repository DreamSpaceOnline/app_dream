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
    jobType: JobType;
    startDate: Date;
    completedDate?: Date;
    jobName: string;
    status: JobStatus;
    progress: number;
}


export enum JobType {
    All = 0,
    RefreshAllStocks = 1,
    RefreshSP500Stocks = 2,
    CalculateGlobalIndicators = 3
}


export enum JobStatus {
    Pending = 0,
    InProgress = 1,
    Completed = 2,
    Cancelled = 3,
    Paused = 4,
    Error = 99
}