import { autoinject, computedFrom } from "aurelia-framework";
import {AccountService} from "../../../../services/account-service";
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { DateHelper } from "../../../../common/helpers/date-helper";
import {JobsApiClient, ScheduledJob } from "../../../../services/services-generated";
import {JobInfoExtentions} from "../../../../common/types/job-models";

@autoinject()
export class Job {
    powerUser = false;
    title = "Job Dashboard";
    subscription: Subscription;
    router: Router;
    jobs: ScheduledJob[] = [];
    currentJob: ScheduledJob;
    jobUrl = "";

    constructor(account: AccountService, private readonly jobService: JobsApiClient, eventAggregator: EventAggregator) {
        this.powerUser = account.currentUser.isAuthenticated;

        this.subscription = eventAggregator.subscribe("router:navigation:complete", () => {
            this.onNavigatioComplete();
        });
    }

    activate(params: any, routeconfig: RouteConfig, navigationInstruction: NavigationInstruction) {
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
        await this.loadCurrentJob();
        await this.loadHistory();

        this.watchCurrentJob();
    }

    async loadHistory() {
        this.jobs = [];
        const jobType = JobInfoExtentions.getJobType(this.jobUrl);
        this.jobs = await this.jobService.getSheduledJobHistory(jobType);
    }

    async loadCurrentJob() {
        const jobType = JobInfoExtentions.getJobType(this.jobUrl);
        this.currentJob = await this.jobService.getCurrentJob(jobType);
    }

    deleteAll() {
        this.jobs = [];
    }

    async startJob() {
        const jobType = JobInfoExtentions.getJobType(this.jobUrl);
        this.currentJob = await this.jobService.startScheduledJobs(jobType);
        this.watchCurrentJob();
    }

    async watchCurrentJob() {
        if (this.currentJob != null && this.currentJob.jobId > 0) {
            setTimeout(async () => {
                await this.loadCurrentJob();

                this.watchCurrentJob();
            }, 1000);
        } else {
            await this.loadHistory();
        }
    }

    async resumeJob() {
        await this.jobService.resumeScheduledJob(this.currentJob.jobId);
        this.currentJob = await this.jobService.getJob(this.currentJob.jobId);
    }

    async pauseJob() {
        await this.jobService.pauseScheduledJob(this.currentJob.jobId);
        this.currentJob = await this.jobService.getJob(this.currentJob.jobId);
    }

    async cancelJob() {
        await this.jobService.cancelScheduledJob(this.currentJob.jobId);
        await this.loadJobs();
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

    @computedFrom("currentJob.startDate")
    get startDate(): string {

        if (this.currentJob) {
            return DateHelper.getUIDate(this.currentJob.startDate);
        }
        return "";
    }

}