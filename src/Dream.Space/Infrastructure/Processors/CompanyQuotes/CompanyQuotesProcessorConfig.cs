using System;

namespace Dream.Space.Infrastructure.Processors.CompanyQuotes
{
    public class CompanyQuotesProcessorConfig: IProcessorConfig
    {
        public TimeSpan Interval { get; set; }

        public bool IsSP500 => false;
    }
}