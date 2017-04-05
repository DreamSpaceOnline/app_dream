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

        public List<IndicatorResult> Merge(List<IndicatorResult> indicatorResuls)
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

        public virtual List<IndicatorResult> Combine(List<IndicatorResult> indicatorResults)
        {
            return indicatorResults;
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
