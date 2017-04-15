using System;

namespace Dream.Space.Infrastructure.Processors.CompanyQuotes
{
    public class CompanySP500QuotesProcessorConfig : IProcessorConfig
    {
        public TimeSpan Interval { get; set; }

        public bool IsSP500 => true;
    }
}