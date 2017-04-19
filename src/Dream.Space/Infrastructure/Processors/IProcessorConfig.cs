using System;

namespace Dream.Space.Infrastructure.Processors
{
    public interface IProcessorConfig
    {
        TimeSpan Interval { get; }
        bool IsSP500 { get; }
        bool IsIndex { get; }
    }
}