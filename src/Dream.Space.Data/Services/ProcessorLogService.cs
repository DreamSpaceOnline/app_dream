using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data.Repositories;
using Dream.Space.Data.Entities.Logs;
using System.Collections.Generic;
using System;
using Dream.Space.Data.Entities.Jobs;

namespace Dream.Space.Data.Services
{
    public interface IProcessorLogService
    {
        Task<ProcessorLog> GetAsync(int logId);
        Task<List<ProcessorLog>> GetAllAsync(int jobId);
        Task DeleteAllAsync(int jobId);
        Task ClearLogsAsync(int jobType);
    }

    public class ProcessorLogService : IProcessorLogService
    {
        private readonly ILifetimeScope _container;

        public ProcessorLogService(ILifetimeScope container)
        {
            _container = container;
        }


        public async Task<ProcessorLog> GetAsync(int logId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IProcessorLogRepository>();
                var record = await repository.GetAsync(logId);
                return record;
            }
        }

        public async Task<List<ProcessorLog>> GetAllAsync(int jobId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IProcessorLogRepository>();
                var records = await repository.GetAllAsync(jobId);
                return records;
            }
        }

        public async Task DeleteAllAsync(int jobId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IProcessorLogRepository>();
                await repository.DeleteAllAsync(jobId);
            }
        }

        public async Task ClearLogsAsync(int jobType)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var jobTypeName = ((ScheduledJobType)jobType).ToString();

                var repository = scope.Resolve<IProcessorLogRepository>();
                await repository.ClearLogsAsync(jobTypeName);
            }
        }
    }
}
