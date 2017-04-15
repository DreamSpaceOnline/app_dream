using Dream.Space.Data.Entities.Jobs;
using Dream.Space.Data.Services;
using Dream.Space.Infrastructure.Loggers;
using Dream.Space.Stock;
using Dream.Space.Reader;

namespace Dream.Space.Infrastructure.Processors.CompanyQuotes
{
    public class CompanySP500QuotesProcessor : CompanyQuotesProcessor
    {
        public CompanySP500QuotesProcessor(
                            IProcessorLogger logger, 
                            IScheduledJobsService jobsService, 
                            ICompanyService companyService, 
                            IMarketStockClient marketStockClient, 
                            IQuotesFileReader quotesFileReader,
                            CompanySP500QuotesProcessorConfig config) 
            : base(logger, jobsService, companyService, marketStockClient, quotesFileReader, config)
        {
        }

        public override ScheduledJobType JobType => ScheduledJobType.RefreshSP500Stocks;
    }
}