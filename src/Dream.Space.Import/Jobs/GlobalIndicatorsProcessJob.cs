using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Calculators.IndicatorProcessor;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Requests;
using Dream.Space.Data.Services;
using Dream.Space.Models.Companies;
using Dream.Space.Models.Indicators;

namespace Dream.Space.Import.Jobs
{
    public class GlobalIndicatorsProcessJob : IGlobalIndicatorsProcessJob
    {
        private readonly ICompanyService _companyService;
        private readonly IIndicatorService _indicatorService;
        private readonly IGlobalIndicatorService _globalIndicatorService;
        private readonly IndicatorProcessorFactory _processorFactory;

        public GlobalIndicatorsProcessJob(ICompanyService companyService, 
            IIndicatorService indicatorService,
            IGlobalIndicatorService globalIndicatorService, 
            IndicatorProcessorFactory processorFactory)
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
                var sectors = _companyService.GetCompanySectors();
                var indicators = _indicatorService.GetGlobalIndicators();

                foreach (var sector in sectors)
                {

                    var findRequest = new FindCompaniesForJobRequest()
                    {
                        JobId = Guid.NewGuid().ToString(),
                        MaxRecordCount = 10,
                        SectorId = sector.SectorId
                    };

                    var companies = _companyService.FindCompaniesForJob(findRequest);
                    var sectorResult = new SectorIndicatorResults(sector.SectorId, _processorFactory);

                    while (companies != null && companies.Any())
                    {
                        foreach (var company in companies)
                        {
                            foreach (var indicator in indicators)
                            {
                                var result = CalculateIndicators(company, indicator);

                                sectorResult.Add(result, indicator, company.Ticker);
                            }
                        }
                        companies = _companyService.FindCompaniesForJob(findRequest);
                    }

                    var tickers = new List<string>();
                    var indicatorResults = sectorResult.IndicatorResults.Select(i => i.Value).ToList();
                    foreach (var result in indicatorResults)
                    {
                        tickers.AddRange(result.Select(r => r.Ticker).ToList());
                    }

                    tickers = tickers.Distinct().ToList();


                    foreach (var indicatorResult in sectorResult.IndicatorResults)
                    {
                        var calculator = _processorFactory.Create(indicatorResult.Value.Indicator);
                        var result = calculator.Merge(indicatorResult.Value);

                        _globalIndicatorService.Save(new GlobalIndicator
                        {
                            SectorId = sector.SectorId,
                            IndicatorId = indicatorResult.Key,
                            Values = result,
                            StartDate = result.Last().Date,
                            EndDate = result.First().Date,
                            CalculatedSuccessful = true,
                            CompanyCount = tickers.Count,
                            LastCalculated = DateTime.UtcNow
                        });
                    }

                    _companyService.CompleteJob(new CompleteJobRequest {JobId = findRequest.JobId, Tickers = tickers});
                }
            }

            catch (Exception ex)
            {
                log.Error("FindCompaniesForJob", ex);
            }
        }

        private IList<IndicatorModel> CalculateIndicators(CompanyToUpdate company, Indicator indicator)
        {
            var calculator = _processorFactory.Create(indicator);
            return calculator.Calculate(indicator, company.HistoryQuotes);
        }
    }


    public interface IGlobalIndicatorsProcessJob : IJob
    {
    }
}
