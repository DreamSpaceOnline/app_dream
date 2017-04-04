using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Jobs;

namespace Dream.Space.Data.Services
{
    public class GlobalMarketsService : IGlobalMarketsService
    {
        private readonly IScheduledJobsService _scheduledJobs;

        public GlobalMarketsService(IScheduledJobsService scheduledJobs)
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


        public async Task<IList<ScheduledJob>> GetJobHistoryAsync(string jobType)
        {
            if (!Enum.TryParse(jobType, out ScheduledJobType enumJobType))
            {
                enumJobType = ScheduledJobType.All;
            }
            var jobs = await _scheduledJobs.GetHistoryAsync(enumJobType);

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
    }
}