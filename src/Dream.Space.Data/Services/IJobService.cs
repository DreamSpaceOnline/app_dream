using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Jobs;

namespace Dream.Space.Data.Services
{
    public interface IJobService
    {
        Task RefreshAllStocksAsync();
        Task RefreshSP500StocksAsync();
        Task RecalculateGlobalIndexesAsync();
        Task<IList<ScheduledJob>> GetJobHistoryAsync(ScheduledJobType jobType = ScheduledJobType.All);
        Task CancelScheduledJobAsync(int jobId);
        Task PauseScheduledJobAsync(int jobId);
        Task ResumeScheduledJobAsync(int jobId);
        Task ClearJobsHistoryAsync();
        Task<IList<ScheduledJob>> GetActiveJobsAsync();
        Task<ScheduledJob> StartScheduledJobAsync(ScheduledJobType jobType);
        Task<ScheduledJob> GetCurrentJobAsync(ScheduledJobType jobType);
    }
}
