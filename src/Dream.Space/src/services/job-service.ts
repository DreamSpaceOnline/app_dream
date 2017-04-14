import { autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { JobInfo, JobInfoExtentions } from "../common/types/job-models";

@autoinject()
export class JobService {

    constructor(private http: HttpClient) {
    }

    public async loadHistory(jobUrl: string) : Promise<JobInfo[]> {
        const jobType = JobInfoExtentions.getJobType(jobUrl);
        const response = await this.http.fetch(`job/history/${jobType}`, { method: "get" });

        return await response.json();
    }

    public async startJob(jobUrl: string): Promise<JobInfo> {
        const jobType = JobInfoExtentions.getJobType(jobUrl);
        const response = await this.http.fetch(`job/start/${jobType}`, { method: "post" });

        return await response.json();
    }

    public async currentJob(jobUrl: string): Promise<JobInfo> {
        const jobType = JobInfoExtentions.getJobType(jobUrl);
        const response = await this.http.fetch(`job/current/${jobType}`, { method: "get" });

        return await response.json();
    }

    public async deleteJob(jobId: number) {
        await this.http.fetch(`job/delete/${jobId}`, { method: "delete" });
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


}