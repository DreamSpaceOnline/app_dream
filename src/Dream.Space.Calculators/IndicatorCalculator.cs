using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Models.Calculators;
using Dream.Space.Models.Indicators;
using Dream.Space.Models.Quotes;

namespace Dream.Space.Calculators
{
    public abstract class IndicatorCalculator: IIndicatorCalculator
    {
        public abstract bool CanCalculate(IIndicatorEntity indicator);

        public abstract List<IndicatorModel> Calculate(IIndicatorEntity indicator, List<QuotesModel> quotes);

        public virtual List<IndicatorModel> Merge(List<IndicatorResult> indicatorResults)
        {
            var result = new List<IndicatorModel>();
            if (indicatorResults == null || !indicatorResults.Any())
            {
                return result;
            }
            var dates = indicatorResults.First().Result.Select(d => d.Date).ToList();

            foreach (var date in dates)
            {
                var value = indicatorResults
                    .Sum(indicatorResult => indicatorResult.Result
                        .Where(r => r.Date == date)
                        .Select(r => r.Value)
                        .Sum());


                result.Add(new IndicatorModel
                {
                    Date = date,
                    Value = value
                });
            }

            return result;
        }
    }
}
