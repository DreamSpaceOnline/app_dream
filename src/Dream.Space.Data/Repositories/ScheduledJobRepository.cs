using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
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

        public async Task<IList<ScheduledJob>> GetActiveJobsAsync(ScheduledJobType jobType)
        {
            var jobs = await Dbset.Where(j => 
                (j.Status == JobStatus.InProgress || j.Status == JobStatus.Paused || j.Status == JobStatus.Pending) 
                && (j.JobType == jobType || jobType == ScheduledJobType.All))
                .OrderByDescending(j => j.StartDate).ToListAsync();

            return jobs;
        }


        public async Task<IList<ScheduledJob>> GetHistoryAsync(ScheduledJobType jobType)
        {
            var jobs = await Dbset
                .Where(j => (j.Status == JobStatus.Cancelled || j.Status == JobStatus.Completed || j.Status == JobStatus.Error) 
                    && (j.JobType == jobType || jobType == ScheduledJobType.All))
                .OrderByDescending(j => j.StartDate).ToListAsync();

            return jobs;
        }

        public async Task CancelExpiredJobsAsync(ScheduledJobType jobType)
        {
            const string sql = @"
                UPDATE J 
                    SET Status = 3,
                        CompletedDate = @Now
                FROM ScheduledJob J 
                WHERE J.Status IN (0, 1, 4) 
                    AND (J.JobType = @JobType OR @JobType = 0)
                    AND (J.StartDate < @StartDate)";


            await DbContext.Database.ExecuteSqlCommandAsync(sql, 
                new SqlParameter("@Now", DateTime.UtcNow),
                new SqlParameter("@JobType", (int)jobType),
                new SqlParameter("@StartDate", DateTime.Today.AddDays(-1)));
        }

    }
}