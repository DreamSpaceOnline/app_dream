import { autoinject, bindable, computedFrom } from "aurelia-framework";
import { DateHelper } from "../../../../../common/helpers/date-helper";
import { JobInfo, JobInfoExtentions } from "../../../../../common/types/job-models";
import { ProcessorLog } from "../../../../../common/types/log-models";
import { LogService } from "../../../../../services/log-service";
import { JobService } from "../../../../../services/job-service";

@autoinject()
export class JobDetails {

    @bindable job: JobInfo;
    expanded = false;
    deleted = false;
    jobLogs: ProcessorLog[] = [];

    constructor(private logService: LogService, private jobService: JobService) {

    }


    async expand() {
        this.expanded = !this.expanded;
        if (this.expanded && this.jobLogs != null && this.jobLogs.length === 0 && this.job != null) {
            this.jobLogs = await this.logService.getJobLogs(this.job.jobId);
        }
    }

    async delete() {
        if (this.job != null && this.job.jobId > 0) {
            await this.logService.deleteJobLogs(this.job.jobId);
            await this.jobService.deleteJob(this.job.jobId);

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
