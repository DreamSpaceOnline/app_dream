import { autoinject, computedFrom } from "aurelia-framework";
import {AccountService} from "../../../../services/account-service";
import { JobService } from "../../../../services/job-service";
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { JobInfo, JobType, JobStatus } from "./job-details/job-details";

@autoinject()
export class Job {
    powerUser = false;
    title = "Job Dashboard";
    subscription: Subscription;
    router: Router;
    jobs: JobInfo[] = [];
    currentJob: JobInfo;
    jobUrl = "";

    constructor(account: AccountService, private jobService: JobService, eventAggregator: EventAggregator) {
        this.powerUser = account.currentUser.isAuthenticated;

        this.subscription = eventAggregator.subscribe("router:navigation:complete", () => {
            this.onNavigatioComplete();
        });
    }

    activate(params, routeconfig: RouteConfig, navigationInstruction: NavigationInstruction) {
        this.router = navigationInstruction.router;
        if (params && routeconfig) {

        }
    }

    detached() {
        this.subscription.dispose();
    }

    onNavigatioComplete() {
        this.title = this.router.currentInstruction.config.title;
        this.jobUrl = this.router.currentInstruction.config.name;
        this.loadJobs();
    }

    async loadJobs() {
        this.currentJob = await this.jobService.currentJob(this.jobUrl);
        this.jobs = await this.jobService.loadHistory(this.jobUrl);
    }

    deleteAll() {
        this.jobs = [];
    }

    async startJob() {
        this.currentJob = await this.jobService.startJob(this.jobUrl);
    }

    async resumeJob() {
        await this.jobService.resumeJob(this.currentJob.jobId);
        this.currentJob = await this.jobService.getJob(this.currentJob.jobId);
    }

    async pauseJob() {
        await this.jobService.pauseJob(this.currentJob.jobId);
        this.currentJob = await this.jobService.getJob(this.currentJob.jobId);
    }

    async cancelJob() {
        await this.jobService.cancelJob(this.currentJob.jobId);
        await this.loadJobs();
    }

    async viewLog(jobId: number) {
        console.log(jobId);
        //let logs = await this.jobService.getJobLog(jobId);
    }

    @computedFrom("currentJob.jobId", "currentJob.status")
    get currentJobInProgress(): boolean {
        if (this.currentJob && this.currentJob.jobId > 0) {
            return this.currentJob.status === JobStatus.InProgress
                || this.currentJob.status === JobStatus.Pending;
        }

        return false;
    }

    @computedFrom("currentJob.jobId", "currentJob.status")
    get currentJobPaused(): boolean {
        if (this.currentJob && this.currentJob.jobId > 0) {
            return this.currentJob.status === JobStatus.Paused;
        }

        return false;
    }

    @computedFrom("currentJob.jobId")
    get currentJobStarted(): boolean {
        if (this.currentJob && this.currentJob.jobId > 0) {
            return true;
        }

        return false;
    }

    @computedFrom("currentJob.jobType")
    get jobTypeName(): string {

        if (this.currentJob) {
            switch (this.currentJob.jobType) {
                case JobType.All: return "All";
                case JobType.CalculateGlobalIndicators: return "Calculate Global Indicators";
                case JobType.RefreshAllStocks: return "Refresh All Stocks";
                case JobType.RefreshSP500Stocks: return "Refresh S&P 500 Stocks";

                default: return this.currentJob.jobType + "";
            }
        }
        return "";
    }

    @computedFrom("currentJob.status")
    get jobStatusName(): string {
        if (this.currentJob) {
            switch (this.currentJob.status) {
                case JobStatus.Cancelled: return "Cancelled";
                case JobStatus.Completed: return "Completed";
                case JobStatus.Error: return "Error";
                case JobStatus.InProgress: return "In Progress";
                case JobStatus.Paused: return "Paused";
                case JobStatus.Pending: return "Pending";

                default: return this.currentJob.status + "";
            }
        }
        return "";
    }

}