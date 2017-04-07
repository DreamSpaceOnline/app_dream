using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Jobs;

namespace Dream.Space.Data.Repositories
{
    public interface IScheduledJobDetailsRepository
    {
        Task<List<ScheduledJobDetails>> GetAsync(int jobId);
        Task<int> GetCountAsync(int jobId);
        Task ClearAsync(int jobId);
        Task AddRangeAsync(int jobId, IList<string> tickers);
    }


    public class ScheduledJobDetailsRepository : DreamDbRepository<ScheduledJobDetails>, IScheduledJobDetailsRepository
    {
        public ScheduledJobDetailsRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<List<ScheduledJobDetails>> GetAsync(int jobId)
        {
            var records = await Dbset.Where(r => r.JobId == jobId).ToListAsync();
            return records;
        }

        public async Task<int> GetCountAsync(int jobId)
        {
            var count = await Dbset.CountAsync(r => r.JobId == jobId);
            return count;
        }

        public async Task ClearAsync(int jobId)
        {
            const string sql = @"DELETE FROM ScheduledJobDetails WHERE JobId = @JobId";
            await DbContext.Database.ExecuteSqlCommandAsync(sql, new SqlParameter("@JobId", SqlDbType.Int){Value = jobId});
        }

        public async Task AddRangeAsync(int jobId, IList<string> tickers)
        {

            const string sql = @"
                IF NOT EXISTS (SELECT * FROM ScheduledJobDetails 
                   WHERE JobId = @JobId
                   AND Ticker = @Ticker )
               BEGIN
                   INSERT INTO ScheduledJobDetails (JobId, Ticker)
                   VALUES (@JobId, @Ticker)
               END";

            foreach (var ticker in tickers)
            {
                await DbContext.Database.ExecuteSqlCommandAsync(sql,
                    new SqlParameter("@JobId", SqlDbType.Int) { Value = jobId },
                    new SqlParameter("@Ticker", SqlDbType.VarChar) { Value = ticker });
            }

        }
    }
}