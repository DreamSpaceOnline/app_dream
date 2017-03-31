using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Jobs;

namespace Dream.Space.Data.Repositories
{
    public class ScheduledJobRepository : DreamDbRepository<ScheduledJob>, IScheduledJobRepository
    {
        public ScheduledJobRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<List<ScheduledJob>> GetRecentAsync()
        {
            var jobs = new List<ScheduledJob>();

            foreach (ScheduledJobType jobType in Enum.GetValues(typeof(ScheduledJobType)))
            {
                jobs.Add(await GetRecentAsync(jobType));    
            }
            return jobs.OrderByDescending(j => j.StartDate).ToList();
        }

        public async Task<ScheduledJob> GetRecentAsync(ScheduledJobType jobType)
        {
            var job = await Dbset.OrderByDescending(j => j.StartDate).FirstOrDefaultAsync(r => r.JobType == jobType);
            return job;
        }

        public async Task<ScheduledJob> GetAsync(int id)
        {
            var job = await Dbset.FirstOrDefaultAsync(r => r.JobId == id);
            return job;
        }

        public async Task DeleteAsync(int id)
        {
            var job = await GetAsync(id);
            if (job != null && job.IsFinished())
            {
                Dbset.Remove(job);
            }
        }

        public async Task DeleteHistoryAsync()
        {
            const string sql = @"DELETE FROM ScheduledJob WHERE Status IN (2,3,99)";

            await DbContext.Database.ExecuteSqlCommandAsync(sql);
        }

        public async Task<IList<ScheduledJob>> GetActiveJobsAsync()
        {
            var jobs = await Dbset.Where(j => !j.IsFinished()).OrderByDescending(j => j.StartDate).ToListAsync();

            return jobs;
        }

        public async Task<IList<ScheduledJob>> GetHistoryAsync(ScheduledJobType jobType)
        {
            var jobs = await Dbset.Where(j => j.IsFinished() && (j.JobType == jobType || jobType == ScheduledJobType.All)).OrderByDescending(j => j.StartDate).ToListAsync();

            return jobs;
        }
    }
}