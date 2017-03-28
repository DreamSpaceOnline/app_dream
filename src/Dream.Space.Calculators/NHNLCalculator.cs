using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Indicators;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Indicators;
using Dream.Space.Models.Quotes;

namespace Dream.Space.Calculators
{

    public class NHNLCalculator : IndicatorCalculator
    {
        private readonly NHNL _calculator;

        public NHNLCalculator()
        {
            _calculator = new NHNL();
        }

        public override bool CanCalculate(IIndicatorEntity indicator)
        {
            return string.Compare(indicator.Name, _calculator.Name, StringComparison.InvariantCultureIgnoreCase) == 0;
        }

        public override List<IndicatorResult> Calculate(IIndicatorEntity indicator, List<QuotesModel> quotes)
        {
            Validate(indicator, quotes);

            return _calculator.Calculate(quotes, ExtractPeriod(indicator));
        }

        /// <summary>
        ///   Record High Percent = {New Highs / (New Highs + New Lows)} x 100 
        ///   High-Low Index = 10 - day SMA of Record High Percent
        /// </summary>
        /// <param name="indicatorResults"></param>
        /// <returns></returns>
        public override List<IndicatorResult> Merge(List<CompanyIndicatorResult> indicatorResults)
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
                var calculated = indicatorResults.SelectMany(c => c.Result).Where(r => r.Date == date).ToList();
                if (calculated.Any())
                {
                    var nhnlResuts = calculated.Select(r => r.AsNHNLIndicatorResult()).ToList();

                    var newLow = nhnlResuts.Sum(r => r.NewLow);
                    var newHigh = nhnlResuts.Sum(r => r.NewHigh);


                    var value = CalculateNHNL(newHigh, newLow);

                    result.Add(new IndicatorResult(date) { 
                        Value = value
                    });
                }
            }

            var sma = new SMA().Calculate(
                result.Select(item => new QuotesModel
                    {
                        Date = item.Date,
                        Close = item.Value
                    }).ToList(), 10);

            return sma;
        }

        private decimal CalculateNHNL(decimal newHigh, decimal newLow)
        {
            if (newHigh + newLow == 0)
            {
                return 0;
            }

            return ((newHigh) / (newHigh + newLow)) * 100;
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