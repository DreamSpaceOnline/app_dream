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
            IndicatorResults = new Dictionary<int, IndicatorResults>();
        }

        public void Add(IList<IndicatorModel> result, IIndicatorEntity indicator, string ticker)
        {
            if (!IndicatorResults.ContainsKey(indicator.IndicatorId))
            {
                IndicatorResults.Add(indicator.IndicatorId, new IndicatorResults(indicator));
            }
            IndicatorResults[indicator.IndicatorId].Add(new IndicatorResult(ticker, result));
        }

        public Dictionary<int, IndicatorResults> IndicatorResults { get; set; }

    }
}