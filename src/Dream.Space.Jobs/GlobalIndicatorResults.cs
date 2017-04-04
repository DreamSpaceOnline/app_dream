using System.Collections.Generic;
using Dream.Space.Models.Indicators;

namespace Dream.Space.Jobs
{
    public class GlobalIndicatorResults
    {
        public int SectorId { get; }

        public GlobalIndicatorResults(int sectorId):this()
        {
            SectorId = sectorId;
        }

        public GlobalIndicatorResults()
        {
            SectorId = 0;
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