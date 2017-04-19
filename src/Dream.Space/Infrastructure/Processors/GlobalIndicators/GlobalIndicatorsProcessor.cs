using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Calculators.IndicatorProcessor;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Entities.Jobs;
using Dream.Space.Data.Extensions;
using Dream.Space.Data.Services;
using Dream.Space.Infrastructure.Loggers;
using Dream.Space.Models.Companies;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Indicators;

namespace Dream.Space.Infrastructure.Processors.GlobalIndicators
{

    public class GlobalIndicatorsProcessor : ProcessorBase
    {

        private readonly IIndicatorService _indicatorService;
        private readonly CalculatorFactory _calculatorFactory;
        private readonly IGlobalIndicatorService _globalIndicatorService;
        private List<Indicator> _indicators;

        public GlobalIndicatorsProcessor(
                                            GlobalIndicatorsProcessorConfig config,
                                            IScheduledJobsService jobsService,
                                            ICompanyService companyService,
                                            IIndicatorService indicatorService,
                                            CalculatorFactory calculatorFactory,
                                            IGlobalIndicatorService globalIndicatorService,
                                            IProcessorLogger logger) 
            : base(logger, jobsService, companyService, config)
        {
            _indicatorService = indicatorService;
            _calculatorFactory = calculatorFactory;
            _globalIndicatorService = globalIndicatorService;
        }

        public override ScheduledJobType JobType => ScheduledJobType.CalculateGlobalIndicators;

        protected override async Task InitializeProcessor()
        {
           _indicators = _indicatorService.GetGlobalIndicators();

            await base.InitializeProcessor();
        }

        protected override async Task Execute(ScheduledJob job, List<CompanyQuotesModel> companies)
        {
            var indicatorResults = await CalculateGlobalIndicators(companies, _indicators, job.JobId);
            foreach (var indicatorResult in indicatorResults)
            {
                await _indicatorService.StoreIntermediateResultsAsync(job.JobId, indicatorResult.Key, indicatorResult.Value);
            }
        }


        protected override async Task FinalizeJob(ScheduledJob job)
        {
            foreach (var indicator in _indicators)
            {
                var indicatorResults = await GetIntermediateResults(job.JobId, indicator.IndicatorId);
                var calculator = _calculatorFactory.Create(indicator);
                indicatorResults = calculator.Combine(indicatorResults);

                await _globalIndicatorService.Save(new GlobalIndicator
                {
                    SectorId = 0,
                    IndicatorId = indicator.IndicatorId,
                    Values = indicatorResults,
                    StartDate = indicatorResults.Last().Date,
                    EndDate = indicatorResults.First().Date,
                    CalculatedSuccessful = true,
                    CompanyCount = Total,
                    LastCalculated = DateTime.UtcNow
                });

                await ClearIntermediateResults(job.JobId, indicator.IndicatorId);

            }
        }

        private async Task<List<IndicatorResult>> GetIntermediateResults(int jobId, int indicatorId)
        {
            return await _indicatorService.GetIntermediateResultsAsync(jobId, indicatorId);
        }

        private async Task ClearIntermediateResults(int jobId, int indicatorId)
        {
            await _indicatorService.ClearIntermediateResultsAsync(jobId, indicatorId);
        }



        private async Task<Dictionary<int, List<IndicatorResult>>> CalculateGlobalIndicators(IList<CompanyQuotesModel> companies, List<Indicator> indicators, int jobId)
        {
            var result = new Dictionary<int, List<IndicatorResult>>();

            foreach (var indicator in indicators)
            {
                var calculator = _calculatorFactory.Create(indicator);
                var calculatorResult = new List<IndicatorResult>();

                foreach (var company in companies)
                {
                    var quotes = company.HistoryQuotes;
                    List<IndicatorResult> calcResult;

                    if (indicator.Period == QuotePeriod.Weekly)
                    {
                        calcResult = calculator.Calculate(indicator, quotes.ToWeeekly());
                    }
                    else
                    {
                        calcResult = calculator.Calculate(indicator, quotes);
                    }

                    if (calcResult != null && calcResult.Any())
                    {
                        calculatorResult.AddRange(calcResult);
                    }
                }

                var indicatorResult = calculator.Merge(calculatorResult);
                var intermediateResult = await GetIntermediateResults(jobId, indicator.IndicatorId);
                if (intermediateResult != null && intermediateResult.Any())
                {
                    indicatorResult.AddRange(intermediateResult);
                    indicatorResult = calculator.Merge(indicatorResult);
                }

                result.Add(indicator.IndicatorId, indicatorResult);
            }

            return result;
        }

    }

}