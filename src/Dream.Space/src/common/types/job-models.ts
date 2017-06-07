import {ScheduledJob, JobStatus, ScheduledJobType } from "../../services/services-generated";

export class JobInfoExtentions {

    static getJobStatusName(status: JobStatus): string {
        switch (status) {
            case JobStatus.Cancelled: return "Cancelled";
            case JobStatus.Completed: return "Completed";
            case JobStatus.Error: return "Error";
            case JobStatus.InProgress: return "In Progress";
            case JobStatus.Paused: return "Paused";
            case JobStatus.Pending: return "In Progress";

            default: return status + "";
        }
    }

    static getJobTypeName(jobType: ScheduledJobType): string {
        switch (jobType) {
            case ScheduledJobType.All: return "All";
            case ScheduledJobType.CalculateGlobalIndicators: return "Calculate Global Indicators";
            case ScheduledJobType.RefreshAllStocks: return "Refresh All Stocks";
            case ScheduledJobType.RefreshSP500Stocks: return "Refresh S&P 500 Stocks";
            case ScheduledJobType.RefreshIndices: return "Refresh Indices";

            default: return jobType + "";
        }
    }

    static isJobInProgress(job: ScheduledJob): boolean {
        if (job && job.jobId > 0) {
            return job.status === JobStatus.InProgress
                || job.status === JobStatus.Pending;
        }

        return false;
    }

    static isJobPaused(job: ScheduledJob): boolean {
        if (job && job.jobId > 0) {
            return job.status === JobStatus.Paused;
        }

        return false;
    }


    static getJobType(jobUrl: string): ScheduledJobType {
        switch (jobUrl) {
            case "recalculate-global-indicators":
                return ScheduledJobType.CalculateGlobalIndicators;
            case "refresh-sp500-stocks":
                return ScheduledJobType.RefreshSP500Stocks;
            case "refresh-all-stocks":
                return ScheduledJobType.RefreshAllStocks;
            case "refresh-indices":
                return ScheduledJobType.RefreshIndices;

            default:
                return 0;
        }
    }
}