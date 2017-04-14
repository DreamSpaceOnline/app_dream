using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Logs;
using System.Data.SqlClient;

namespace Dream.Space.Data.Repositories
{
    public interface IProcessorLogRepository
    {
        Task<List<ProcessorLog>> GetAllAsync(int jobId);
        Task<ProcessorLog> GetAsync(int id);
        void Delete(ProcessorLog record);
        Task DeleteAllAsync(int jobId);
        Task ClearLogsAsync(string jobType);
    }


    public class ProcessorLogRepository : DreamDbRepository<ProcessorLog>, IProcessorLogRepository
    {
        public ProcessorLogRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public async Task ClearLogsAsync(string jobType)
        {
            const string sql = @"DELETE FROM ProcessorLog WHERE JobType = @jobType";

            await DbContext.Database.ExecuteSqlCommandAsync(sql, new SqlParameter("@jobType", jobType));
        }

        public async Task DeleteAllAsync(int jobId)
        {
            const string sql = @"DELETE FROM ProcessorLog WHERE JobId = @JobId";

            await DbContext.Database.ExecuteSqlCommandAsync(sql, new SqlParameter("@JobId", jobId));
        }

        public async Task<List<ProcessorLog>> GetAllAsync(int jobId)
        {
            var records = await Dbset.Where(r => r.JobId == jobId).OrderByDescending(r => r.Logged).ToListAsync();
            if(records.Any(r => r.Level == "Error"))
            {
                return records.Where(r => r.Level == "Error").ToList();
            }
            return records;
        }

        public async Task<ProcessorLog> GetAsync(int logId)
        {
            var record = await Dbset.FirstOrDefaultAsync(r => r.Id == logId);
            return record;
        }
    }
}