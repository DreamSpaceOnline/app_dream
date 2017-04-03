using System;
using Dream.Space.Data.Entities.Jobs;

namespace Dream.Space.Infrastructure.Loggers
{
    public interface IProcessorLogger
    {
        void Info(ProcessorInfo processor, string message);
        void Error(ProcessorInfo processor, string message);
        void Error(ProcessorInfo processor, string message, Exception exception);
    }

    public class ProcessorInfo
    {
        public string ProcessName { get; set; }
        public int JobId { get; set; }
        public JobStatus JobState { get; set; }
        public ScheduledJobType JobType { get; set; }
    }
}