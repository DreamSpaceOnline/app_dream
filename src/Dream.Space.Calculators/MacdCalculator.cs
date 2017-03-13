using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Enums;
using Dream.Space.Data.Models;
using Dream.Space.Indicators;
using Dream.Space.Indicators.IndicatorParams;
using Dream.Space.Indicators.Models;
using Dream.Space.Models.Indicators;
using Dream.Space.Reader.Models;

namespace Dream.Space.Calculators
{
    public class MacdCalculator : IIndicatorCalculator
    {
        private readonly Macd _calculator;

        public MacdCalculator()
        {
            _calculator = new Macd();
        }

        public bool CanCalculate(Indicator indicator)
        {
            return string.Compare(indicator.Name, _calculator.Name, StringComparison.InvariantCultureIgnoreCase) == 0;
        }

        public List<IndicatorModel> Calculate(Indicator indicator, List<QuotesModel> quotes)
        {
            Validate(indicator, quotes);

            var macdParams = ExtractMacdParams(indicator.Params);
            return _calculator.Calculate(quotes, macdParams);
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


        public void Validate(Indicator indicator, List<QuotesModel> quotes)
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