using System.Collections.Generic;
using System.Linq;
using Dream.Space.Calculators.IndicatorProcessor;
using Dream.Space.Models.Indicators;

namespace Dream.Space.Import.Jobs
{
    public class SectorIndicatorResults
    {
        private readonly IndicatorProcessorFactory _processorFactory;
        public int SectorId { get; }

        public SectorIndicatorResults(int sectorId, IndicatorProcessorFactory processorFactory)
        {
            _processorFactory = processorFactory;
            SectorId = sectorId;
            IndicatorResults = new Dictionary<int, CompanyIndicatorResults>();
        }

        public void Add(IList<IndicatorResult> result, IIndicatorEntity indicator, string ticker)
        {
            if (!IndicatorResults.ContainsKey(indicator.IndicatorId))
            {
                IndicatorResults.Add(indicator.IndicatorId, new CompanyIndicatorResults(indicator));
            }
            IndicatorResults[indicator.IndicatorId].Add(new CompanyIndicatorResult(ticker, result));
        }

        public Dictionary<int, CompanyIndicatorResults> IndicatorResults { get; set; }

    }
}