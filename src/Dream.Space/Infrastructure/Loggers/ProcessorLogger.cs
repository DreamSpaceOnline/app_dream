using System;
using NLog;

namespace Dream.Space.Infrastructure.Loggers
{
    public class ProcessorLogger: IProcessorLogger
    {
        private readonly NLog.Logger _logger = LogManager.GetLogger("ProcessorLogger");

        public void Info(ProcessorInfo processor, string message)
        {
            var eventInfo = CreateLogEventInfo(LogLevel.Info, processor, message);
            _logger.Log(eventInfo);
        }

        public void Error(ProcessorInfo processor, string message)
        {
            var eventInfo = CreateLogEventInfo(LogLevel.Error, processor, message);
            _logger.Log(eventInfo);
        }

        public void Error(ProcessorInfo processor, string message, Exception exception)
        {
            var eventInfo = CreateLogEventInfo(LogLevel.Error, processor, message);
            eventInfo.Exception = exception;

            _logger.Log(eventInfo);
        }

        private static LogEventInfo CreateLogEventInfo(LogLevel logLevel, ProcessorInfo processor, string message)
        {
            var eventInfo = new LogEventInfo(logLevel, string.Empty, message);

            eventInfo.Properties["Processor"] = processor.ProcessName;
            eventInfo.Properties["JobId"] = processor.JobId;
            eventInfo.Properties["JobState"] = processor.JobState.ToString();
            eventInfo.Properties["JobType"] = processor.JobType.ToString();

            return eventInfo;
        }
    }


}