import { autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { ProcessorLog } from "../common/types/log-models";
import { JobType } from "../common/types/enums";

@autoinject()
export class LogService {

    constructor(private http: HttpClient) {
    }


    public async getJobLogs(jobId: number): Promise<ProcessorLog[]> {
        const response = await this.http.fetch(`logs/job/${jobId}`, { method: "get" });

        return await response.json();
    }


    public async deleteJobLogs(jobId: number) {
        await this.http.fetch(`logs/job/delete/${jobId}`, { method: "delete" });
    }

    public async deleteJobTypeLogs(jobType: JobType) {
        await this.http.fetch(`logs/job-type/delete/${jobType}`, { method: "delete" });
    }


}