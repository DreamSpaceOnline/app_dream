using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Indicators;
using Dream.Space.Models.Quotes;
using Dream.Space.Models.Strategies.Rules;

namespace Dream.Space.Models.Playgrounds
{
    public class StrategyRulesCalculator
    {
        private readonly List<IStrategyRuleView> _rules;
        private readonly CompanyChartData _charts;

        public StrategyRulesCalculator(List<IStrategyRuleView> rules, CompanyChartData charts)
        {
            _rules = rules;
            _charts = charts;
        }


        public List<StrategyRuleSetResult> Calculate()
        {
            var result = new List<StrategyRuleSetResult>();
            foreach (var rule in _rules)
            {
                var firstValue = GetFirstValue(rule);
                var secondValue = GetSecondValue(rule);

                var ruleResult = new StrategyRuleResult(rule);
                ruleResult.Compare(firstValue, secondValue);

                var ruleSet = result.FirstOrDefault(r => r.RuleSetId == ruleResult.RuleSetId);
                if (ruleSet == null)
                {
                    result.Add(new StrategyRuleSetResult(ruleResult));
                }
                else
                {
                    ruleSet.Add(ruleResult);
                }
            }
            return result;
        }


        private decimal GetFirstValue(IStrategyRuleView rule)
        {
            switch (rule.DataSourceV1)
            {
                case DataSourceType.Indicator:
                    return GetValueFromIndicator(rule, true);
                case DataSourceType.HistoricalData:
                    return GetValueFromHistorical(rule, true);
                case DataSourceType.Constant:
                    return decimal.Parse(rule.ConstV1);
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }
        private decimal GetSecondValue(IStrategyRuleView rule)
        {
            switch (rule.DataSourceV2)
            {
                case DataSourceType.Indicator:
                    return GetValueFromIndicator(rule, false);
                case DataSourceType.HistoricalData:
                    return GetValueFromHistorical(rule, false);
                case DataSourceType.Constant:
                    return decimal.Parse(rule.ConstV2);
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }

        private decimal GetValueFromHistorical(IStrategyRuleView rule, bool isFirst)
        {
            var values = isFirst ? _charts.Periods.First(p => p.Period == rule.Period).Quotes.Skip(rule.SkipItemsV1).Take(rule.TakeItemsV1).ToList() 
                : _charts.Periods.First(p => p.Period == rule.Period).Quotes.Skip(rule.SkipItemsV2).Take(rule.TakeItemsV2).ToList();

            var result = CalculateHistoricalValue(values, isFirst ? rule.TransformItemsV1 : rule.TransformItemsV2,
                isFirst ? (HistoricalDataSeriesType) rule.DataSeriesV1 : (HistoricalDataSeriesType) rule.DataSeriesV2);

            return result;
        }

        private decimal CalculateHistoricalValue(List<QuotesModel> quotes, TransformFunction transform, HistoricalDataSeriesType dataSeries)
        {
            List<decimal> values;

            switch (dataSeries)
            {
                case HistoricalDataSeriesType.Open:
                    values = quotes.Select(q => q.Open).ToList();
                    break;
                case HistoricalDataSeriesType.Close:
                    values = quotes.Select(q => q.Close).ToList();
                    break;
                case HistoricalDataSeriesType.High:
                    values = quotes.Select(q => q.High).ToList();
                    break;
                case HistoricalDataSeriesType.Low:
                    values = quotes.Select(q => q.Low).ToList();
                    break;
                case HistoricalDataSeriesType.Volume:
                    values = quotes.Select(q => q.Volume).ToList();
                    break;
                default:
                    throw new ArgumentOutOfRangeException(nameof(dataSeries), dataSeries, null);
            }

            switch (transform)
            {
                case TransformFunction.First:
                    return values.First();

                case TransformFunction.Max:
                    return values.Max(v => v);

                case TransformFunction.Min:
                    return values.Min(v => v);

                case TransformFunction.Sum:
                    return values.Sum(v => v);

                case TransformFunction.Avg:
                    return values.Average(v => v);

                default:
                    throw new ArgumentOutOfRangeException(nameof(transform), transform, null);
            }
        }

        private decimal GetValueFromIndicator(IStrategyRuleView rule, bool isFirst)
        {
            var indicator = _charts.Periods.First(p => p.Period == rule.Period).Indicators
                .Where(i => i.Indicator.IndicatorId == (isFirst ? rule.DataSeriesV1 : rule.DataSeriesV2))
                .Select(i => i)
                .FirstOrDefault();

            if (indicator != null)
            {
                var values = indicator.IndicatorValues
                    .Skip(isFirst ? rule.SkipItemsV1 : rule.SkipItemsV2)
                    .Take(isFirst ? rule.TakeItemsV1 : rule.TakeItemsV2)
                    .ToList();

                return GetValueFromIndicator(rule, values, isFirst);
            } 

            return decimal.MinValue;
        }

        private decimal GetValueFromIndicator(IStrategyRuleView rule, List<IndicatorResult> values, bool isFirst)
        {
            var transform = isFirst ? rule.TransformItemsV1 : rule.TransformItemsV2;
            switch (transform)
            {
                case TransformFunction.First:
                    return values.Select(i => i.Value).First();
                case TransformFunction.Max:
                    return values.Max(i => i.Value);
                case TransformFunction.Sum:
                    return values.Sum(i => i.Value);
                case TransformFunction.Avg:
                    return values.Average(i => i.Value);
                case TransformFunction.Min:
                    return values.Min(i => i.Value);
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }
    }
}