import { autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { JobInfo } from "../components/market/jobs-dashboard/jobs/job-details/job-details";

@autoinject()
export class JobService {

    constructor(private http: HttpClient) {
    }

    public async loadHistory(jobUrl: string) : Promise<JobInfo[]> {
        const jobType = this.getJobType(jobUrl);
        const response = await this.http.fetch(`job/history/${jobType}`, { method: "get" });

        return await response.json();
    }

    public async startJob(jobUrl: string): Promise<JobInfo> {
        const jobType = this.getJobType(jobUrl);
        const response = await this.http.fetch(`job/start/${jobType}`, { method: "post" });

        return await response.json();
    }

    public async currentJob(jobUrl: string): Promise<JobInfo> {
        const jobType = this.getJobType(jobUrl);
        const response = await this.http.fetch(`job/current/${jobType}`, { method: "get" });

        return await response.json();
    }


    public async pauseJob(jobId: number) {
        await this.http.fetch(`job/pause/${jobId}`, { method: "put" });
    }

    public async resumeJob(jobId: number) {
        await this.http.fetch(`job/resume/${jobId}`, { method: "put" });
    }

    public async cancelJob(jobId: number) {
        await this.http.fetch(`job/cancel/${jobId}`, { method: "put" });
    }

    public async getJob(jobId: number): Promise<JobInfo> {
        const response = await this.http.fetch(`job/info/${jobId}`, { method: "get" });

        return await response.json();
    }

    getJobType(jobUrl: string): number {
        switch (jobUrl) {
            case "recalculate-global-indicators":
                return 3;
            case "refresh-sp500-stocks":
                return 2;
            case "refresh-all-stocks":
                return 1;
            
            default:
                return 0;
        }
    }
}