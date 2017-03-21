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
        private readonly IndicatorProcessorFactory _processorFactory;

        public GlobalIndicatorsProcessJob(ICompanyService companyService, IIndicatorService indicatorService, IndicatorProcessorFactory processorFactory)
        {
            _companyService = companyService;
            _indicatorService = indicatorService;
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

                    sectorResult.Merge();
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

    public class SectorIndicatorResults
    {
        private readonly IndicatorProcessorFactory _processorFactory;
        public int SectorId { get; }

        public SectorIndicatorResults(int sectorId, IndicatorProcessorFactory processorFactory)
        {
            _processorFactory = processorFactory;
            SectorId = sectorId;
            IndicatorResults = new Dictionary<int, IndicatorResults>();
        }

        public void Add(IList<IndicatorModel> result, Indicator indicator, string ticker)
        {
            if (!IndicatorResults.ContainsKey(indicator.IndicatorId))
            {
                IndicatorResults.Add(indicator.IndicatorId, new IndicatorResults(indicator));
            }
            IndicatorResults[indicator.IndicatorId].Add(new IndicatorResult(ticker, result));
        }

        public Dictionary<int, IndicatorResults> IndicatorResults { get; set; }

        public void Merge()
        {
            foreach (var indicatorResult in IndicatorResults)
            {
                var calculator = _processorFactory.Create(indicatorResult.Value.Indicator);
                indicatorResult.Value.Merge(calculator);
            }
        }
    }


    public interface IGlobalIndicatorsProcessJob : IJob
    {
    }
}
