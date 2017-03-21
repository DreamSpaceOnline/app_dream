using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Indicators;
using Dream.Space.Models.Calculators;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Indicators;
using Dream.Space.Models.Quotes;

namespace Dream.Space.Calculators
{
    public class EMACalculator : IIndicatorCalculator
    {
        private readonly EMA _calculator;

        public EMACalculator()
        {
            _calculator = new EMA();
        }

        public bool CanCalculate(IIndicatorEntity indicator)
        {
            return string.Compare(indicator.Name, _calculator.Name, StringComparison.InvariantCultureIgnoreCase) == 0;
        }

        public List<IndicatorModel> Calculate(IIndicatorEntity indicator, List<QuotesModel> quotes)
        {
            Validate(indicator, quotes);

            return _calculator.Calculate(quotes, ExtractPeriod(indicator));
        }

        public List<IndicatorModel> Merge(List<IndicatorResult> indicatorResults)
        {
            var result  = new List<IndicatorModel>();
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


        public void Validate(IIndicatorEntity indicator, List<QuotesModel> quotes)
        {
            if (!CanCalculate(indicator))
            {
                throw new NotSupportedException($"Calculator '{_calculator.Name}' does not support indicator '{indicator.Name}'");
            }

            var param = indicator.Params.FirstOrDefault(p => p.ParamName == IndicatorParamName.Period.ToString());
            if (param == null || param.Value == 0)
            {
                throw new ArgumentException($"Period parameter value is not set. Params: {indicator.JsonParams}");
            }
        }


        private int ExtractPeriod(IIndicatorEntity indicator)
        {
            var param = indicator.Params.First(p => p.ParamName == IndicatorParamName.Period.ToString());
            return param.Value;
        }


    }
}