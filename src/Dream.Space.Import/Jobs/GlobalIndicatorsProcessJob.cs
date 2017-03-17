using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Calculators;
using Dream.Space.Calculators.IndicatorProcessor;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Models;
using Dream.Space.Data.Requests;
using Dream.Space.Data.Services;
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
                    var sectorResult = new SectorIndicatorResults(sector.SectorId);

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
        public int SectorId { get; }

        public SectorIndicatorResults(int sectorId)
        {
            SectorId = sectorId;
            IndicatorResults = new Dictionary<int, IndicatorResult>();
        }

        public void Add(IList<IndicatorModel> result, Indicator indicator, string ticker)
        {
            if (!IndicatorResults.ContainsKey(indicator.IndicatorId))
            {
                IndicatorResults.Add(indicator.IndicatorId, new IndicatorResult());
            }
            IndicatorResults[indicator.IndicatorId].Add(result);
        }

        public Dictionary<int, IndicatorResult> IndicatorResults { get; set; }

        public void Merge()
        {
            throw new NotImplementedException();
        }
    }

    public class IndicatorResult
    {
        public void Add(IList<IndicatorModel> result)
        {
            throw new NotImplementedException();
        }
    }


    public interface IGlobalIndicatorsProcessJob : IJob
    {
    }
}
