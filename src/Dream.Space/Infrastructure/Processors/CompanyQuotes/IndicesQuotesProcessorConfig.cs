using System;

namespace Dream.Space.Infrastructure.Processors.CompanyQuotes
{
    public class IndicesQuotesProcessorConfig : IProcessorConfig
    {
        public TimeSpan Interval { get; set; }
        public bool IsSP500 => false;
        public bool IsIndex => true;
    }
}