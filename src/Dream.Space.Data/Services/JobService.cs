using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Jobs;

namespace Dream.Space.Data.Services
{
    public class JobService : IJobService
    {
        private readonly IScheduledJobsService _scheduledJobs;

        public JobService(IScheduledJobsService scheduledJobs)
        {
            _scheduledJobs = scheduledJobs;
        }


        public async Task RefreshAllStocksAsync()
        {
            await _scheduledJobs.StartJobAsync(ScheduledJobType.RefreshAllStocks);
        }

        public async Task RefreshSP500StocksAsync()
        {
            await _scheduledJobs.StartJobAsync(ScheduledJobType.RefreshSP500Stocks);
        }

        public async Task RecalculateGlobalIndexesAsync()
        {
            await _scheduledJobs.StartJobAsync(ScheduledJobType.CalculateGlobalIndicators);
        }


        public async Task<IList<ScheduledJob>> GetJobHistoryAsync(ScheduledJobType jobType)
        {
            var jobs = await _scheduledJobs.GetHistoryAsync(jobType);

            return jobs;
        }

        public async Task CancelScheduledJobAsync(int jobId)
        {
            await _scheduledJobs.CancelJobAsync(jobId);
        }

        public async Task PauseScheduledJobAsync(int jobId)
        {
            await _scheduledJobs.PauseJobAsync(jobId);
        }

        public async Task ResumeScheduledJobAsync(int jobId)
        {
            await _scheduledJobs.ResumeJobAsync(jobId);
        }

        public async Task ClearJobsHistoryAsync()
        {
            await _scheduledJobs.ClearHistoryAsync();
        }

        public async Task<IList<ScheduledJob>> GetActiveJobsAsync()
        {
            return await _scheduledJobs.GetActiveJobsAsync(ScheduledJobType.All);
        }

        public async Task<ScheduledJob> StartScheduledJobAsync(ScheduledJobType jobType)
        {
            return await _scheduledJobs.StartJobAsync(jobType);
        }

        public async Task<ScheduledJob> GetCurrentJobAsync(ScheduledJobType jobType)
        {
            var job = await _scheduledJobs.FindAciveJobAsync(jobType);
            return job;
        }
    }
}