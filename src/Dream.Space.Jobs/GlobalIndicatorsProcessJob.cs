using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Calculators.IndicatorProcessor;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Requests;
using Dream.Space.Data.Services;
using Dream.Space.Models.Companies;
using Dream.Space.Models.Indicators;

namespace Dream.Space.Jobs
{
    public class GlobalIndicatorsProcessJob : IGlobalIndicatorsProcessJob
    {
        private readonly ICompanyService _companyService;
        private readonly IIndicatorService _indicatorService;
        private readonly IGlobalIndicatorService _globalIndicatorService;
        private readonly CalculatorFactory _processorFactory;

        public GlobalIndicatorsProcessJob(ICompanyService companyService, 
            IIndicatorService indicatorService,
            IGlobalIndicatorService globalIndicatorService, 
            CalculatorFactory processorFactory)
        {
            _companyService = companyService;
            _indicatorService = indicatorService;
            _globalIndicatorService = globalIndicatorService;
            _processorFactory = processorFactory;
        }

        public void Start()
        {
            var log = new Logger();

            try
            {
                var indicators = _indicatorService.GetGlobalIndicators();


                var findRequest = new FindCompaniesForJobRequest()
                {
                    JobId = Guid.NewGuid().ToString(),
                    MaxRecordCount = 10,
                    SectorId = 0
                };

                var companies = _companyService.FindCompaniesForJob(findRequest);
                var sectorResult = new GlobalIndicatorResults(0);

                while (companies != null && companies.Any())
                {
                    foreach (var company in companies)
                    {
                        foreach (var indicator in indicators)
                        {
                            var result = CalculateIndicators(company, indicator);

                            sectorResult.Add(result, indicator, company.Ticker);
                        }

                        log.Info($"Processed {company.Ticker}");
                    }

                    _companyService.CompleteJob(new CompleteJobRequest
                    {
                        JobId = findRequest.JobId,
                        Tickers = companies.Select(c => c.Ticker).ToList()
                    });

                    companies = null; // _companyService.FindCompaniesForJob(findRequest);
                }

                var indicatorResults = sectorResult.IndicatorResults.Select(i => i.Value).ToList();
                if (indicatorResults.Any())
                {
                    var tickers = indicatorResults.First().Select(r => r.Ticker).ToList();

                    foreach (var indicatorResult in indicatorResults)
                    {
                        var calculator = _processorFactory.Create(indicatorResult.Indicator);
                        var result = calculator.Merge(indicatorResult);


                        _globalIndicatorService.Save(new GlobalIndicator
                        {
                            SectorId = 0, //sector.SectorId,
                            IndicatorId = indicatorResult.Indicator.IndicatorId,
                            Values = result,
                            StartDate = result.Last().Date,
                            EndDate = result.First().Date,
                            CalculatedSuccessful = true,
                            CompanyCount = tickers.Count,
                            LastCalculated = DateTime.UtcNow
                        }).GetAwaiter().GetResult();

                    }
                }
                    
            }

            catch (Exception ex)
            {
                log.Error("FindCompaniesForJob", ex);
            }
        }

        private IList<IndicatorResult> CalculateIndicators(CompanyQuotesModel company, Indicator indicator)
        {
            var calculator = _processorFactory.Create(indicator);
            return calculator.Calculate(indicator, company.HistoryQuotes);
        }
    }


    public interface IGlobalIndicatorsProcessJob : IJob
    {
    }
}
