using Dream.Space.Data.Entities.Jobs;
using Dream.Space.Data.Services;
using Dream.Space.Infrastructure.Loggers;
using Dream.Space.Stock;
using Dream.Space.Reader;

namespace Dream.Space.Infrastructure.Processors.CompanyQuotes
{
    public class IndicesQuotesProcessor : CompanyQuotesProcessor
    {
        public IndicesQuotesProcessor(
                            IProcessorLogger logger, 
                            IScheduledJobsService jobsService, 
                            ICompanyService companyService, 
                            IMarketStockClient marketStockClient, 
                            IQuotesFileReader quotesFileReader,
                            IndicesQuotesProcessorConfig config) 
            : base(logger, jobsService, companyService, marketStockClient, quotesFileReader, config)
        {
        }

        public override ScheduledJobType JobType => ScheduledJobType.RefreshIndices;
    }
}