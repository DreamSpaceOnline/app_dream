import { JobInfo } from "../components/market/jobs-dashboard/jobs/job-details/job-details";

export class JobService {

    loadHistory(jobUrl: string) {
        let jobs: JobInfo[] = [];

        if (jobUrl) {
            for (let index = 0; index < 5; index++) {
                let job: JobInfo = {
                    jobId: 1 + index
                };

                jobs.push(job);
            }
        }

        return jobs;
    }
}