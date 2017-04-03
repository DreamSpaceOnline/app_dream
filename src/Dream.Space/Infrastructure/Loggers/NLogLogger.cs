using System;
using NLog;

namespace Dream.Space.Infrastructure.Loggers
{
    public class NLogLogger : ILogger
    {
        private readonly NLog.Logger _logger = LogManager.GetCurrentClassLogger();

        public void Exception(Exception exception)
        {
            Exception(exception, string.Empty);
        }

        public void Exception(Exception exception, string message)
        {
            _logger.Error(exception, message);
        }

        public void Debug(string message)
        {
            _logger.Debug(message);
        }

        public void Info(string message)
        {
            _logger.Info(message);
        }

        public void Warn(string message)
        {
            _logger.Warn(message);
        }

        public void Exception(Exception exception, string message, object o)
        {
            _logger.Error(exception, message, o);
        }

        public void Info(string message, object o)
        {
            _logger.Error(message, o);
        }

        public void Warn(string message, object o)
        {
            _logger.Error(message, o);
        }
    }
}