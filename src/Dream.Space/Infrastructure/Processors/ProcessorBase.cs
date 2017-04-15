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

    public interface IProcessorConfig
    {
        TimeSpan Interval { get; }
        bool IsSP500 { get; }
    }

    public abstract class ProcessorBase : IProcessor, IDisposable
    {
        #region Constructor

        private bool _running;
        private CancellationTokenSource _cancellationToken;
        protected readonly IProcessorLogger _logger;
        protected readonly IScheduledJobsService _jobsService;
        private readonly TimeSpan _interval;
        protected int _total;
        private bool _isSP500;
        protected readonly ICompanyService _companyService;

        public ProcessorBase(
                        IProcessorLogger logger, 
                        IScheduledJobsService jobsService,
                        ICompanyService companyService,
                        IProcessorConfig config)
        {
            _cancellationToken = new CancellationTokenSource();
            _logger = logger;
            _jobsService = jobsService;
            _companyService = companyService;
            _interval = config.Interval;
            _isSP500 = config.IsSP500;
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
                        _total = _isSP500
                                ? await _companyService.GetSP500CountAsync()
                                : await _companyService.GetTotalCountAsync();

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

                                    await _jobsService.UpdateProgressAsync(job.JobId, tickers, _total);

                                    _logger.Info(new ProcessorInfo
                                    {
                                        JobId = job.JobId,
                                        JobType = job.JobType,
                                        JobState = job.Status,
                                        ProcessName = JobType.ToString()
                                    }, $"Processing Tickers: {tickers}");

                                    state =  ProcessorState.InProgress;
                                    job = await _jobsService.GetJobAsync(job.JobId);
                                }
                            }
                            catch (Exception exception)
                            {
                                _logger.Error(new ProcessorInfo
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


                            await _jobsService.CompleteJobAsync(job.JobId);

                            _logger.Info(new ProcessorInfo
                            {
                                ProcessName = JobType.ToString(),
                                JobId = job.JobId,
                                JobType = ScheduledJobType.CalculateGlobalIndicators,
                                JobState = JobStatus.Completed
                            }, "Job completed successfully");

                            await _jobsService.ClearJobProgressAsync(job.JobId);
                        }

                        if (state == ProcessorState.Error)
                        {
                            job.Status = JobStatus.Error;
                            await _jobsService.UpdateJobAsync(job);
                        }
                    }
                }
                catch (Exception ex)
                {
                    _logger.Error(
                        new ProcessorInfo { ProcessName = JobType.ToString() },
                        ex.Message, ex);
                }

                Thread.Sleep(_interval);
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
            return await _jobsService.FindPendingJobAsync(JobType);
        }

        protected virtual async Task<List<CompanyQuotesModel>> FetchNextAsync(int jobId)
        {
            return await _companyService.FindCompaniesForJob(new FindCompaniesForJobRequest
            {
                JobId = jobId.ToString(),
                MaxRecordCount = 10,
                SP500 = _isSP500
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