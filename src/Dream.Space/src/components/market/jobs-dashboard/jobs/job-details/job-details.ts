import { autoinject, bindable, computedFrom } from "aurelia-framework";
import { DateHelper } from "../../../../../common/helpers/date-helper";
import { JobInfoExtentions } from "../../../../../common/types/job-models";
import { ScheduledJob, ProcessorLog, JobsApiClient, LogsApiClient } from "../../../../../services/services-generated";

@autoinject()
export class JobDetails {

    @bindable job: ScheduledJob;
    expanded = false;
    deleted = false;
    jobLogs: ProcessorLog[] = [];

    constructor(private readonly logService: LogsApiClient, private readonly jobService: JobsApiClient) {

    }


    async expand() {
        this.expanded = !this.expanded;
        if (this.expanded && this.jobLogs != null && this.jobLogs.length === 0 && this.job != null) {
            this.jobLogs = await this.logService.getJobLogs(this.job.jobId);
        }
    }

    async deleteJob() {
        if (this.job != null && this.job.jobId > 0) {

            await this.logService.deleteJobLogs(this.job.jobId);
            await this.jobService.deleteScheduledJob(this.job.jobId);

            this.deleted = true;
        }
    }

    get completed() {
        if (this.job != null) {
            return DateHelper.getUIDate(this.job.startDate);
        }
        return "";
    }

    runTime() {
        if (this.job != null) {
            return DateHelper.runTime(this.job.startDate, this.job.completedDate);
        } 
        return "";
    }


    @computedFrom("job.status")
    get status(): string {
        if (this.job) {
            return JobInfoExtentions.getJobStatusName(this.job.status);
        }
        return "";
    }
}
