using System;
using System.Threading;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Jobs;
using Dream.Space.Infrastructure.Loggers;

namespace Dream.Space.Infrastructure.Processors.GlobalIndicators
{
    public class GlobalIndicatorsProcessor : IProcessor
    {
        private readonly GlobalIndicatorsProcessorConfig _config;
        private readonly IProcessorLogger _logger;

        public GlobalIndicatorsProcessor(GlobalIndicatorsProcessorConfig config, IProcessorLogger logger)
        {
            _config = config;
            _logger = logger;
        }

        public void Start(CancellationToken token)
        {
            Task.Run(() =>
            {
                using (var waitHandle = token.WaitHandle)
                {
                    var interval = _config.Interval;
                    do
                    {
                        try
                        {
                            var job = FindJob();
                            if (job != null)
                            {
                                var state = ProcessorState.InProgress;
                                var cancelled = false;
                                while (state == ProcessorState.InProgress && !cancelled)
                                {
                                    state = Execute(job);
                                    cancelled = IsJobCancelled(job);
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

        private bool IsJobCancelled(ScheduledJob job)
        {
            throw new NotImplementedException();
        }

        private ScheduledJob FindJob()
        {
            throw new NotImplementedException();
        }

        public ProcessorState Execute(ScheduledJob job)
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