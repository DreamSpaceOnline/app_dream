export interface ProcessorLog {
    id: number;
    logged: Date;
    level: string;
    message: string;
    jobId: number;
    jobType: string;
    sobState: string;
    exception: string;
}