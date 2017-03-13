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
    public class ImpulseSystemCalculator : IIndicatorCalculator
    {
        private readonly ImpulseSystem _calculator;

        public ImpulseSystemCalculator()
        {
            _calculator = new ImpulseSystem();
        }

        public bool CanCalculate(Indicator indicator)
        {
            return string.Compare(indicator.Name, _calculator.Name, StringComparison.InvariantCultureIgnoreCase) == 0;
        }

        public List<IndicatorModel> Calculate(Indicator indicator, List<QuotesModel> quotes)
        {
            Validate(indicator, quotes);

            var calcParams = ExtractMacdParams(indicator.Params);
            return _calculator.Calculate(quotes, calcParams);
        }

        private ImpulseSystemParams ExtractMacdParams(List<IndicatorParam> indicatorParams)
        {
            var fastEmaPeriod = indicatorParams.First(p => p.ParamName == IndicatorParamName.FastEmaPeriod.ToString());
            var slowEmaPeriod = indicatorParams.First(p => p.ParamName == IndicatorParamName.SlowEmaPeriod.ToString());
            var signalEmaPeriod = indicatorParams.First(p => p.ParamName == IndicatorParamName.SignalEmaPeriod.ToString());
            var emaPeriod = indicatorParams.First(p => p.ParamName == IndicatorParamName.EmaPeriod.ToString());

            var macdParams = new MacdParams
            {
                FastEmaPeriod = fastEmaPeriod.Value,
                SlowEmaPeriod = slowEmaPeriod.Value,
                SignalEmaPeriod = signalEmaPeriod.Value
            };

            return new ImpulseSystemParams
            {
                 MacdParams = macdParams,
                 EmaPeriod = emaPeriod.Value
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

            param = indicator.Params.FirstOrDefault(p => p.ParamName == IndicatorParamName.EmaPeriod.ToString());
            if (param == null || param.Value == 0)
            {
                throw new ArgumentException($"EmaPeriod parameter value is not set. Params: {indicator.JsonParams}");
            }
        }

    }
}