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
                var value = indicatorResults.SelectMany(indicatorResult => indicatorResult.Result)
                    .Where(r => r.Date == date)
                    .Average(r => r.Value);

                result.Add(new IndicatorResult(date)
                {
                    Value = Math.Round(value, 4)
                });
            }

            return result;
        }

        public virtual List<IndicatorResult> Merge(List<IndicatorResult> indicatorResuls)
        {
            
            var grouped = new Dictionary<DateTime, List<IndicatorResult>>();
            foreach (var item in indicatorResuls)
            {
                if (!grouped.ContainsKey(item.Date))
                {
                    grouped.Add(item.Date, new List<IndicatorResult>());
                }
                grouped[item.Date].Add(item);
            }

            var result = new List<IndicatorResult>();
            foreach (var groupedItem in grouped)
            {
                var item = Merge(groupedItem);
                result.Add(item);
            }

            return result.OrderByDescending(r => r.Date).ToList();
        }

        public virtual IndicatorResult Merge(KeyValuePair<DateTime, List<IndicatorResult>> groupedItems)
        {
            var result = new IndicatorResult(groupedItems.Key);
            var value = groupedItems.Value.Sum(v => v.Value);

            result.Value = Math.Round(value, 4);

            return result;
        }
    }
}
