import { JobType, JobStatus } from "./enums";

export interface JobInfo {
    jobId: number;
    jobType: JobType;
    startDate: Date;
    completedDate?: Date;
    jobName: string;
    status: JobStatus;
    progress: number;
}


export class JobInfoExtentions {

    static getJobStatusName(status: JobStatus): string {
        switch (status) {
            case JobStatus.Cancelled: return "Cancelled";
            case JobStatus.Completed: return "Completed";
            case JobStatus.Error: return "Error";
            case JobStatus.InProgress: return "In Progress";
            case JobStatus.Paused: return "Paused";
            case JobStatus.Pending: return "Pending";

            default: return status + "";
        }
    }

    static getJobTypeName(jobType: JobType): string {
        switch (jobType) {
            case JobType.All: return "All";
            case JobType.CalculateGlobalIndicators: return "Calculate Global Indicators";
            case JobType.RefreshAllStocks: return "Refresh All Stocks";
            case JobType.RefreshSP500Stocks: return "Refresh S&P 500 Stocks";

            default: return jobType + "";
        }
    }

    static isJobInProgress(job: JobInfo): boolean {
        if (job && job.jobId > 0) {
            return job.status === JobStatus.InProgress
                || job.status === JobStatus.Pending;
        }

        return false;
    }

    static isJobPaused(job: JobInfo): boolean {
        if (job && job.jobId > 0) {
            return job.status === JobStatus.Paused;
        }

        return false;
    }


    static getJobType(jobUrl: string): JobType {
        switch (jobUrl) {
            case "recalculate-global-indicators":
                return JobType.CalculateGlobalIndicators;
            case "refresh-sp500-stocks":
                return JobType.RefreshSP500Stocks;
            case "refresh-all-stocks":
                return JobType.RefreshAllStocks;

            default:
                return 0;
        }
    }
}