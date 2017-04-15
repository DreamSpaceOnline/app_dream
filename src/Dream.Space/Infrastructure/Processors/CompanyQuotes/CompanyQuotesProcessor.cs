using Dream.Space.Data.Entities.Jobs;
using Dream.Space.Data.Services;
using Dream.Space.Infrastructure.Loggers;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Models.Companies;
using Dream.Space.Stock;
using Dream.Space.Reader;
using System.Linq;
using Dream.Space.Models.Quotes;
using Dream.Space.Stock.Requests;
using Dream.Space.Data.Extensions;
using Dream.Space.Data.Requests;

namespace Dream.Space.Infrastructure.Processors.CompanyQuotes
{

    public class CompanyQuotesProcessor : ProcessorBase
    {
        #region Constructors

        private readonly IMarketStockClient _marketStockClient;
        private readonly IQuotesFileReader _quotesFileReader;
       

        public CompanyQuotesProcessor(
                            IProcessorLogger logger, 
                            IScheduledJobsService jobsService, 
                            ICompanyService companyService,
                            IMarketStockClient marketStockClient,
                            IQuotesFileReader quotesFileReader,
                            CompanyQuotesProcessorConfig config) 
            : base(logger, jobsService, companyService, config)
        {
            _marketStockClient = marketStockClient;
            _quotesFileReader = quotesFileReader;
        }

        protected CompanyQuotesProcessor(
                    IProcessorLogger logger,
                    IScheduledJobsService jobsService,
                    ICompanyService companyService,
                    IMarketStockClient marketStockClient,
                    IQuotesFileReader quotesFileReader,
                    IProcessorConfig config)
            : base(logger, jobsService, companyService, config)
        {
            _marketStockClient = marketStockClient;
            _quotesFileReader = quotesFileReader;
        }

        #endregion

        public override ScheduledJobType JobType => ScheduledJobType.RefreshAllStocks;

        protected override Task Execute(ScheduledJob job, List<CompanyQuotesModel> companies)
        {
            foreach (var company in companies)
            {

                if (!company.HistoryQuotes.Any())
                {
                    company.LastUpdated = DateTime.Today.AddYears(-10);
                    company.HistoryQuotes = new List<QuotesModel>();
                }

                var historyRequest = new GetStockHistoryRequest(company.Ticker, company.LastUpdated);
                var errorMessage = string.Empty;
                var quotes = new List<QuotesModel>();

                try
                {
                    var csvQuotes =
                        Task.Run(() => _marketStockClient.GetStockHistory(historyRequest)).Result;
                    quotes = _quotesFileReader.Read(csvQuotes);
                    quotes = quotes.Merge(company.HistoryQuotes);

                }
                catch (AggregateException ex)
                {
                    errorMessage = ex.Message;
                        
                    foreach (var exception in ex.InnerExceptions)
                    {
                        errorMessage += ". " + exception.Message;
                    }

                    _logger.Error(new ProcessorInfo
                    {
                        JobId = job.JobId,
                        JobType = job.JobType,
                        JobState = JobStatus.Error,
                        ProcessName = JobType.ToString()
                    }, $"Failed to read Company quotes: {company.Ticker}. {errorMessage}", ex);

                }
                catch (Exception ex)
                {
                    _logger.Error(new ProcessorInfo
                    {
                        JobId = job.JobId,
                        JobType = job.JobType,
                        JobState = JobStatus.Error,
                        ProcessName = JobType.ToString()
                    }, $"Failed to read Company quotes: {company.Ticker}. {ex.Message}", ex);
                }

                try
                {
                    _companyService.UpdateQuotes(new UpdateQuotesRequest(company.Ticker, quotes)
                    {
                        ErrorMessage = errorMessage
                    });

                }
                catch (Exception ex)
                {
                    _logger.Error(new ProcessorInfo
                    {
                        JobId = job.JobId,
                        JobType = job.JobType,
                        JobState = JobStatus.Error,
                        ProcessName = JobType.ToString()
                    }, $"Failed to update Company: {company.Ticker}. {ex.Message}", ex);
                }

            }

            return Task.FromResult(0);
        }

    }
}