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

        public abstract List<IndicatorResult> Calculate(IIndicatorEntity indicator, List<QuotesModel> quotes);

        public virtual List<IndicatorResult> Merge(List<CompanyIndicatorResult> indicatorResults)
        {
            var result = new List<IndicatorResult>();
            if (indicatorResults == null || !indicatorResults.Any())
            {
                return result;
            }
            var startDate = indicatorResults.Select(c => c.Result.Last()).Min(a => a.Date);
            var dates = indicatorResults.First().Result.Select(d => d.Date).Where(d => d >= startDate).ToList();

            foreach (var date in dates)
            {
                var value = indicatorResults
                    .Sum(indicatorResult => indicatorResult.Result
                        .Where(r => r.Date == date)
                        .Select(r => r.Value)
                        .Sum());


                result.Add(new IndicatorResult(date)
                {
                    Value = value
                });
            }

            return result;
        }
    }
}
