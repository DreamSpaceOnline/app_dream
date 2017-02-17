using System;

namespace Dream.Space.Infrastructure.Logger
{
    public interface ILogger
    {
        void Debug(string message);
        void Exception(Exception exception);
        void Exception(Exception exception, string message);
        void Info(string message);
        void Warn(string message);
        void Exception(Exception exception, string message, object o);
        void Info(string message, object o);
        void Warn(string message, object o);
    }
}