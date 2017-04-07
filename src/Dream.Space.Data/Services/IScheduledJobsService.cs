using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Jobs;

namespace Dream.Space.Data.Services
{
    public interface IScheduledJobsService
    {
        Task StartJobAsync(ScheduledJobType jobType);
        Task CancelJobAsync(int jobId);
        Task PauseJobAsync(int jobId);
        Task ResumeJobAsync(int jobId);
        Task<IList<ScheduledJob>> GetHistoryAsync(ScheduledJobType jobType);
        Task ClearHistoryAsync();
        Task CancelExpiredJobsAsync(ScheduledJobType jobType);
        Task<IList<ScheduledJob>> GetActiveJobsAsync(ScheduledJobType jobType);
        Task<ScheduledJob> FindAciveJobAsync(ScheduledJobType jobType);
        Task<ScheduledJob> GetJobAsync(int jobId);
        Task<ScheduledJob> FindPendingJobAsync(ScheduledJobType jobType);
        Task CompleteJobAsync(int jobId);
        Task UpdateProgressAsync(int jobId, IList<string> tickers, int total);
    }
}