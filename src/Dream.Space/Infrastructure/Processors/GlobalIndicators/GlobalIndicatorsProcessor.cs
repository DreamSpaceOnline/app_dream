using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Jobs;
using Dream.Space.Data.Services;
using Dream.Space.Infrastructure.Loggers;

namespace Dream.Space.Infrastructure.Processors.GlobalIndicators
{
    public class GlobalIndicatorsProcessor : IProcessor
    {
        private readonly GlobalIndicatorsProcessorConfig _config;
        private readonly IScheduledJobsService _jobsService;
        private readonly IProcessorLogger _logger;

        public GlobalIndicatorsProcessor(GlobalIndicatorsProcessorConfig config, IScheduledJobsService jobsService, IProcessorLogger logger)
        {
            _config = config;
            _jobsService = jobsService;
            _logger = logger;
        }

        public async Task StartAsync(CancellationToken token)
        {
            using (var waitHandle = token.WaitHandle)
            {
                var interval = _config.Interval;
                do
                {
                    try
                    {
                        var job = await FindJob();
                        if (job != null)
                        {
                            var state = ProcessorState.InProgress;
                            var cancelled = false;
                            while (state == ProcessorState.InProgress && !cancelled)
                            {
                                state = await Execute(job);
                                cancelled = await IsJobCancelled(job.JobId);
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        _logger.Error(
                            new ProcessorInfo { ProcessName = Name },
                            $"Failed while executing: {Name}", ex);
                    }
                } while (!waitHandle.WaitOne(interval));
            }
        }

        public void Start(CancellationToken token)
        {
            Task.Run(async () =>
            {
                using (var waitHandle = token.WaitHandle)
                {
                    var interval = _config.Interval;
                    do
                    {
                        try
                        {
                            var job = await FindJob();
                            if (job != null)
                            {
                                var state = ProcessorState.InProgress;
                                var cancelled = false;
                                while (state == ProcessorState.InProgress && !cancelled)
                                {
                                    state = await Execute(job);
                                    cancelled = await IsJobCancelled(job.JobId);
                                }
                            }
                        }
                        catch (Exception ex)
                        {
                            _logger.Error(
                                new ProcessorInfo {ProcessName = Name},
                                $"Failed while executing: {Name}", ex);
                        }
                    } while (!waitHandle.WaitOne(interval));
                }
            }, token);
        }

        private async Task<bool> IsJobCancelled(int jobId)
        {
            var job = await _jobsService.GetJobAsync(jobId);
            return job.Status == JobStatus.Cancelled;
        }

        private async Task<ScheduledJob> FindJob()
        {
            return await _jobsService.FindAciveJobAsync(ScheduledJobType.CalculateGlobalIndicators);
        }

        public Task<ProcessorState> Execute(ScheduledJob job)
        {
            throw new NotImplementedException();
        }

        public string Name => "Global Indicators Processor";
    }

    public enum ProcessorState
    {
        InProgress = 0,
        Completed,
        Error
    }
}