using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Indicators;
using Dream.Space.Indicators.IndicatorParams;
using Dream.Space.Models.Calculators;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Indicators;
using Dream.Space.Models.Quotes;

namespace Dream.Space.Calculators
{
    public class MACDCalculator : IIndicatorCalculator
    {
        private readonly MACD _calculator;

        public MACDCalculator()
        {
            _calculator = new MACD();
        }

        public bool CanCalculate(IIndicatorEntity indicator)
        {
            return string.Compare(indicator.Name, _calculator.Name, StringComparison.InvariantCultureIgnoreCase) == 0;
        }

        public List<IndicatorModel> Calculate(IIndicatorEntity indicator, List<QuotesModel> quotes)
        {
            Validate(indicator, quotes);

            var macdParams = ExtractMacdParams(indicator.Params);
            return _calculator.Calculate(quotes, macdParams);
        }

        public List<IndicatorModel> Merge(List<IndicatorResult> indicatorResults)
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

        private MacdParams ExtractMacdParams(List<IndicatorParam> indicatorParams)
        {
            var fastEmaPeriod = indicatorParams.First(p => p.ParamName == IndicatorParamName.FastEmaPeriod.ToString());
            var slowEmaPeriod = indicatorParams.First(p => p.ParamName == IndicatorParamName.SlowEmaPeriod.ToString());
            var signalEmaPeriod = indicatorParams.First(p => p.ParamName == IndicatorParamName.SignalEmaPeriod.ToString());

            return new MacdParams
            {
                FastEmaPeriod = fastEmaPeriod.Value,
                SlowEmaPeriod = slowEmaPeriod.Value,
                SignalEmaPeriod = signalEmaPeriod.Value
            };
        }


        public void Validate(IIndicatorEntity indicator, List<QuotesModel> quotes)
        {
            if (!CanCalculate(indicator))
            {
                throw new NotSupportedException($"Calculator '{_calculator.Name}' does not support indicator '{indicator.Name}'");
            }

            var param = indicator.Params.FirstOrDefault(p => p.ParamName == IndicatorParamName.FastEmaPeriod.ToString());
            if (param == null || param.Value == 0)
            {
                throw new ArgumentException($"FastEmaPeriod parameter value is not set. Params: {indicator.JsonParams}");
            }

            param = indicator.Params.FirstOrDefault(p => p.ParamName == IndicatorParamName.SlowEmaPeriod.ToString());
            if (param == null || param.Value == 0)
            {
                throw new ArgumentException($"SlowEmaPeriod parameter value is not set. Params: {indicator.JsonParams}");
            }

            param = indicator.Params.FirstOrDefault(p => p.ParamName == IndicatorParamName.SignalEmaPeriod.ToString());
            if (param == null || param.Value == 0)
            {
                throw new ArgumentException($"SignalEmaPeriod parameter value is not set. Params: {indicator.JsonParams}");
            }
        }

    }
}