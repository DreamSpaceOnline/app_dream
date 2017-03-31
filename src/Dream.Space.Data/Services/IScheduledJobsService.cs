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
        Task<IList<ScheduledJob>> GetActiveJobsProgressAsync();
        Task<IList<ScheduledJob>> GetHistoryAsync(ScheduledJobType jobType = ScheduledJobType.All);
        Task ClearHistoryAsync();
    }
}