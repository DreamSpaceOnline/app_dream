using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data.Entities.Jobs;
using Dream.Space.Data.Repositories;

namespace Dream.Space.Data.Services
{
    public class ScheduledJobsService: IScheduledJobsService
    {
        private readonly ILifetimeScope _container;

        public ScheduledJobsService(ILifetimeScope container)
        {
            _container = container;
        }

        public async Task StartJobAsync(ScheduledJobType jobType)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IScheduledJobRepository>();
                var job = await repository.GetRecentAsync(jobType);
                if (job != null)
                {
                    if (!job.IsFinished() && job.Expired())
                    {
                        job.Status = JobStatus.Cancelled;
                        repository.Commit();
                    }
                }

                if (job == null || job.IsFinished())
                {
                    repository.Add(new ScheduledJob
                    {
                        StartDate = DateTime.UtcNow,
                        JobType = jobType,
                        JobName = jobType.ToString(),
                        Status = JobStatus.Pending
                    });

                    repository.Commit();
                }
            }
        }

        public async Task CancelJobAsync(int jobId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IScheduledJobRepository>();
                var job = await repository.GetAsync(jobId);
                if (job != null)
                {
                    if (!job.IsFinished())
                    {
                        job.Status = JobStatus.Cancelled;
                        repository.Commit();
                    }
                }
            }
        }

        public async Task PauseJobAsync(int jobId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IScheduledJobRepository>();
                var job = await repository.GetAsync(jobId);
                if (job != null)
                {
                    if (!job.IsFinished())
                    {
                        job.Status = JobStatus.Paused;
                        repository.Commit();
                    }
                }
            }
        }

        public async Task ResumeJobAsync(int jobId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IScheduledJobRepository>();
                var job = await repository.GetAsync(jobId);
                if (job?.Status == JobStatus.Paused)
                {
                    job.Status = JobStatus.Paused;
                    repository.Commit();
                }
            }
        }

        public async Task<IList<ScheduledJob>> GetActiveJobsProgressAsync()
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IScheduledJobRepository>();
                IList<ScheduledJob> jobs = await repository.GetActiveJobsAsync();

                return jobs;
            }
        }

        public async Task<IList<ScheduledJob>> GetHistoryAsync(ScheduledJobType jobType)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IScheduledJobRepository>();
                var jobs = await repository.GetHistoryAsync(jobType);

                return jobs;
            }
        }

        public async Task ClearHistoryAsync()
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IScheduledJobRepository>();
                await repository.DeleteHistoryAsync();

            }
        }
    }
}
