using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Jobs;

namespace Dream.Space.Data.Repositories
{
    public interface IScheduledJobRepository
    {
        Task<List<ScheduledJob>> GetRecentAsync();
        Task<ScheduledJob> GetRecentAsync(ScheduledJobType jobType);
        Task<ScheduledJob> GetAsync(int id);
        ScheduledJob Add(ScheduledJob job);
        Task CommitAsync();
        void Commit();
        Task DeleteAsync(int id);
        void DeleteAll();
    }
}