using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Jobs;

namespace Dream.Space.Data.Repositories
{
    public interface IScheduledJobRepository
    {
        Task<ScheduledJob> GetAsync(int id);
        ScheduledJob Add(ScheduledJob job);
        Task CommitAsync();
        void Commit();
        Task DeleteAsync(int id);
        Task DeleteHistoryAsync();
        Task<IList<ScheduledJob>> GetActiveJobsAsync(ScheduledJobType jobType);
        Task<IList<ScheduledJob>> GetHistoryAsync(ScheduledJobType jobType);
        Task CancelExpiredJobsAsync(ScheduledJobType jobType);
    }
}