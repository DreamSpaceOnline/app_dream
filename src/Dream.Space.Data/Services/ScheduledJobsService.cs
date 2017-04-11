using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<ScheduledJob> FindAciveJobAsync(ScheduledJobType jobType)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IScheduledJobRepository>();
                await repository.CancelExpiredJobsAsync(jobType);

                ScheduledJob existingJob = null;
                var jobs = await repository.GetActiveJobsAsync(jobType);
                if (jobs != null && jobs.Any())
                {
                    existingJob = jobs.OrderByDescending(j => j.StartDate).First();
                    foreach (var job in jobs)
                    {
                        if (job.JobId != existingJob.JobId)
                        {
                            job.Status = JobStatus.Cancelled;
                            job.CompletedDate = DateTime.UtcNow;

                            repository.Commit();
                        }
                    }
                }

                return existingJob;
            }
        }

        public async Task<ScheduledJob> GetJobAsync(int jobId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IScheduledJobRepository>();
                var job = await repository.GetAsync(jobId);

                return job;
            }
        }

        public async Task<ScheduledJob> FindPendingJobAsync(ScheduledJobType jobType)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                ScheduledJob result = null;
                var repository = scope.Resolve<IScheduledJobRepository>();
                await repository.CancelExpiredJobsAsync(jobType);

                var jobs = await repository.GetActiveJobsAsync(jobType);
                if (jobs != null && jobs.Any())
                {
                    var pendingJobs = jobs.Where(j => j.Status == JobStatus.Pending).ToList();

                    if (pendingJobs.Any()) 
                    {
                        if (pendingJobs.Count == 1)
                        {
                            result = pendingJobs.First();
                        }
                        else
                        {
                            var mostRecent = pendingJobs.OrderByDescending(j => j.StartDate).First();
                            foreach (var job in pendingJobs)
                            {
                                if (job.JobId != mostRecent.JobId)
                                {
                                    job.Status = JobStatus.Cancelled;
                                    job.CompletedDate = DateTime.UtcNow;

                                    repository.Commit();
                                }
                            }
                            result = mostRecent;
                        }
                    }
                }
                return result;
            }
        }

        public async Task CompleteJobAsync(int jobId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IScheduledJobRepository>();
                var job = await repository.GetAsync(jobId);
                if (job != null)
                {
                    if (!job.IsFinished())
                    {
                        job.Status = JobStatus.Completed;
                        job.CompletedDate = DateTime.UtcNow;

                        repository.Commit();
                    }
                }
            }
        }

        public async Task UpdateProgressAsync(int jobId, IList<string> tickers, int total)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IScheduledJobDetailsRepository>();
                var jobRepository = scope.Resolve<IScheduledJobRepository>();

                await repository.AddRangeAsync(jobId, tickers);

                var processed = await repository.GetCountAsync(jobId);

                var job = await jobRepository.GetAsync(jobId);
                job.Progress = (int) Math.Round((processed * 1.0 / total) * 100, 0);
                jobRepository.Commit();
            }

        }

        public async Task<ScheduledJob> UpdateJobAsync(ScheduledJob job)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IScheduledJobRepository>();
                var entity = await repository.GetAsync(job.JobId);
                if (entity != null)
                {
                    entity.Status = job.Status;
                    entity.Progress = job.Progress;

                    repository.Commit();
                }

                return entity;
            }
        }


        public async Task<ScheduledJob> StartJobAsync(ScheduledJobType jobType)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IScheduledJobRepository>();

                var existingJob = await FindAciveJobAsync(jobType);

                if (existingJob == null)
                {
                    existingJob = repository.Add(new ScheduledJob
                    {
                        StartDate = DateTime.UtcNow,
                        CompletedDate = null,
                        JobType = jobType,
                        JobName = jobType.ToString(),
                        Status = JobStatus.Pending
                    });

                    repository.Commit();
                }
                else
                {
                    if (existingJob.Status == JobStatus.Pending || existingJob.Status == JobStatus.Paused)
                    {
                        existingJob.Status = JobStatus.Pending;
                        repository.Commit();
                    }
                }

                return existingJob;
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
                        job.CompletedDate = DateTime.UtcNow;

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
                    job.Status = JobStatus.Pending;
                    repository.Commit();
                }
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

        public async Task CancelExpiredJobsAsync(ScheduledJobType jobType)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IScheduledJobRepository>();
                await repository.CancelExpiredJobsAsync(jobType);
            }
        }

        public async Task<IList<ScheduledJob>> GetActiveJobsAsync(ScheduledJobType jobType)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IScheduledJobRepository>();
                var jobs = await repository.GetActiveJobsAsync(jobType);

                return jobs;
            }
        }
    }
}
