using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Dream.Space.Calculators.IndicatorProcessor;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Entities.Jobs;
using Dream.Space.Data.Extensions;
using Dream.Space.Data.Requests;
using Dream.Space.Data.Services;
using Dream.Space.Infrastructure.Loggers;
using Dream.Space.Jobs;
using Dream.Space.Models.Companies;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Indicators;

namespace Dream.Space.Infrastructure.Processors.GlobalIndicators
{
    public class GlobalIndicatorsProcessor : IProcessor
    {
        #region Constructor

        private readonly GlobalIndicatorsProcessorConfig _config;
        private readonly IScheduledJobsService _jobsService;
        private readonly ICompanyService _companyService;
        private readonly IIndicatorService _indicatorService;
        private readonly CalculatorFactory _calculatorFactory;
        private readonly IProcessorLogger _logger;
        public string Name => "Global Indicators Processor";

        public GlobalIndicatorsProcessor(
            GlobalIndicatorsProcessorConfig config, 
            IScheduledJobsService jobsService, 
            ICompanyService companyService,
            IIndicatorService indicatorService,
            CalculatorFactory calculatorFactory,
            IProcessorLogger logger)
        {
            _config = config;
            _jobsService = jobsService;
            _companyService = companyService;
            _indicatorService = indicatorService;
            _calculatorFactory = calculatorFactory;
            _logger = logger;
        }


        #endregion


        public void Start(CancellationToken token)
        {
            Task.Run(async () =>
            {
                using (var waitHandle = token.WaitHandle)
                {
                    var interval = _config.Interval;
                    do
                    {
                        try
                        {
                            var job = await FindPendingJob();
                            if (job != null)
                            {
                                var indicators = _indicatorService.GetGlobalIndicators();
                                var state = ProcessorState.InProgress;
                                var cancelled = false;
                                while (state == ProcessorState.InProgress && !cancelled)
                                {
                                    state = await Execute(job, indicators);
                                    cancelled = await IsJobCancelled(job.JobId);
                                }
                            }
                        }
                        catch (Exception ex)
                        {
                            _logger.Error(
                                new ProcessorInfo {ProcessName = Name},
                                $"Failed while executing: {Name}", ex);
                        }
                    } while (!waitHandle.WaitOne(interval));
                }
            }, token);
        }


        private async Task<ProcessorState> Execute(ScheduledJob job, List<Indicator> indicators)
        {
            var companies = FetchNext(job);
            if (companies == null || !companies.Any())
            {
                return ProcessorState.Completed;
            }

            var results = CalculateGlobalIndicators(companies, indicators);
            var intermidiateResults = await GetIntermidiateResults(job.JobId);

            return ProcessorState.Completed;
        }

        private Task<string> GetIntermidiateResults(int jobId)
        {
            throw new NotImplementedException();
        }

        private GlobalIndicatorResults CalculateGlobalIndicators(IList<CompanyQuotesModel> companies, IList<Indicator> indicators)
        {
            var result = new GlobalIndicatorResults();
            foreach (var indicator in indicators)
            {
                var calculator = _calculatorFactory.Create(indicator);
                var calculatorResult = new List<IndicatorResult>();

                foreach (var company in companies)
                {
                    var quotes = company.HistoryQuotes;
                    if (indicator.Period == QuotePeriod.Weekly)
                    {
                        quotes = quotes.ToWeeekly();
                    }

                    calculatorResult.AddRange(calculator.Calculate(indicator, quotes));
                }

                var merged = calculator.Merge(calculatorResult);
                //Store intermediate results
            }

            return result;
        }



        public List<CompanyQuotesModel> FetchNext(ScheduledJob job)
        {
            return _companyService.FindCompaniesForJob(new FindCompaniesForJobRequest
            {
                JobId = job.JobId.ToString(),
                MaxRecordCount = 10
            });
        }

        #region Helper Methods

        private async Task<bool> IsJobCancelled(int jobId)
        {
            var job = await _jobsService.GetJobAsync(jobId);
            return job.Status == JobStatus.Cancelled;
        }

        private async Task<ScheduledJob> FindPendingJob()
        {
            return await _jobsService.FindPendingJobAsync(ScheduledJobType.CalculateGlobalIndicators);
        }


        #endregion

    }


    public class CompanyIndicatorResult
    {



        public string Ticker { get; }
        public IList<IndicatorResult> Result { get; }

        public CompanyIndicatorResult(string ticker, IList<IndicatorResult> result)
        {
            Ticker = ticker;
            Result = result;
        }
    }
}