using System;

namespace Dream.Space.Infrastructure.Processors.GlobalIndicators
{
    public class GlobalIndicatorsProcessorConfig: IProcessorConfig
    {
        public TimeSpan Interval { get; set; }
        public bool IsSP500 => true;
        public bool IsIndex => false;
    }
}