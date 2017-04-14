import { autoinject, computedFrom } from "aurelia-framework";
import {AccountService} from "../../../../services/account-service";
import { JobService } from "../../../../services/job-service";
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { JobInfo, JobInfoExtentions } from "../../../../common/types/job-models";

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

        this.watchCurrentJob();
    }

    deleteAll() {
        this.jobs = [];
    }

    async startJob() {
        this.currentJob = await this.jobService.startJob(this.jobUrl);
        this.watchCurrentJob();
    }

    watchCurrentJob() {
        if (this.currentJob != null && this.currentJob.jobId > 0) {
            setTimeout(async () => {
                this.currentJob = await this.jobService.currentJob(this.jobUrl);

                this.watchCurrentJob();
            }, 1000);
        }
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
        return JobInfoExtentions.isJobInProgress(this.currentJob);
    }

    @computedFrom("currentJob.jobId", "currentJob.status")
    get currentJobPaused(): boolean {
        return JobInfoExtentions.isJobPaused(this.currentJob);
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
            return JobInfoExtentions.getJobTypeName(this.currentJob.jobType);
        }
        return "";
    }

    @computedFrom("currentJob.status")
    get jobStatusName(): string {
        if (this.currentJob) {
            return JobInfoExtentions.getJobStatusName(this.currentJob.status);
        }
        return "";
    }

}