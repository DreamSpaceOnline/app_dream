using Dream.Space.Data.Entities.Jobs;
using Dream.Space.Data.Requests;
using Dream.Space.Data.Services;
using Dream.Space.Infrastructure.Loggers;
using Dream.Space.Models.Companies;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;


namespace Dream.Space.Infrastructure.Processors
{
    public abstract class ProcessorBase : IProcessor, IDisposable
    {
        #region Constructor

        private bool _running;
        private CancellationTokenSource _cancellationToken;
        protected readonly IProcessorLogger Logger;
        protected readonly IScheduledJobsService JobsService;
        protected int Total;
        protected readonly ICompanyService CompanyService;
        private IProcessorConfig _config;

        protected ProcessorBase(
                        IProcessorLogger logger, 
                        IScheduledJobsService jobsService,
                        ICompanyService companyService,
                        IProcessorConfig config)
        {
            _cancellationToken = new CancellationTokenSource();
            Logger = logger;
            JobsService = jobsService;
            CompanyService = companyService;
            _config = config;
        }

        public abstract ScheduledJobType JobType { get; }


        #endregion



        public void Start()
        {
            _running = true;

            Task.Run(async () => await StartTask(), _cancellationToken.Token);
        }

        private async Task StartTask()
        {
            while (_running)
            {
                try
                {
                    var job = await FindPendingJob();
                    if (job != null)
                    {
                        var state = ProcessorState.InProgress;
                        Total = _config.IsSP500
                                ? await CompanyService.GetSP500CountAsync()
                                : await CompanyService.GetTotalCountAsync();

                        await InitializeProcessor();

                        while (state == ProcessorState.InProgress && !job.IsFinished())
                        {
                            try
                            {
                                var companies = await FetchNextAsync(job.JobId);
                                if (companies == null || !companies.Any())
                                {
                                    state = ProcessorState.Completed;
                                }
                                else
                                {
                                    var tickers = companies.Select(c => c.Ticker).ToArray();

                                    await Execute(job, companies);

                                    await JobsService.UpdateProgressAsync(job.JobId, tickers, Total);

                                    Logger.Info(new ProcessorInfo
                                    {
                                        JobId = job.JobId,
                                        JobType = job.JobType,
                                        JobState = job.Status,
                                        ProcessName = JobType.ToString()
                                    }, $"Processing Tickers: {tickers}");

                                    state =  ProcessorState.InProgress;
                                    job = await JobsService.GetJobAsync(job.JobId);
                                }
                            }
                            catch (Exception exception)
                            {
                                Logger.Error(new ProcessorInfo
                                {
                                    JobId = job.JobId,
                                    JobType = job.JobType,
                                    JobState = JobStatus.Error,
                                    ProcessName = JobType.ToString()
                                }, $"{exception.Message}", exception);
                                state = ProcessorState.Error;
                            }
                        }

                        if (state == ProcessorState.Completed)
                        {
                            await FinalizeJob(job);


                            await JobsService.CompleteJobAsync(job.JobId);

                            Logger.Info(new ProcessorInfo
                            {
                                ProcessName = JobType.ToString(),
                                JobId = job.JobId,
                                JobType = ScheduledJobType.CalculateGlobalIndicators,
                                JobState = JobStatus.Completed
                            }, "Job completed successfully");

                            await JobsService.ClearJobProgressAsync(job.JobId);
                        }

                        if (state == ProcessorState.Error)
                        {
                            job.Status = JobStatus.Error;
                            await JobsService.UpdateJobAsync(job);
                        }
                    }
                }
                catch (Exception ex)
                {
                    Logger.Error(
                        new ProcessorInfo { ProcessName = JobType.ToString() },
                        ex.Message, ex);
                }

                Thread.Sleep(_config.Interval);
            }
        }

        protected virtual Task InitializeProcessor()
        {
            return Task.FromResult(0);
        }

        protected virtual Task FinalizeJob(ScheduledJob job)
        {
            return Task.FromResult(0);
        }

        protected abstract Task Execute(ScheduledJob job, List<CompanyQuotesModel> companies);


        protected virtual async Task<ScheduledJob> FindPendingJob()
        {
            return await JobsService.FindPendingJobAsync(JobType);
        }

        protected virtual async Task<List<CompanyQuotesModel>> FetchNextAsync(int jobId)
        {
            return await CompanyService.FindCompaniesForJob(new FindCompaniesForJobRequest
            {
                JobId = jobId.ToString(),
                MaxRecordCount = 10,
                SP500 = _config.IsSP500,
                IsIndex = _config.IsIndex
            });
        }

        public void Stop()
        {
            Dispose();
        }


        public void Dispose()
        {
            _running = false;

            if (_cancellationToken != null)
            {
                try
                {
                    _cancellationToken.Cancel();
                    _cancellationToken.Dispose();
                }
                catch
                {
                }
                finally
                {
                    _cancellationToken = null;
                }
            }
        }
    }

}