using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Calculators;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Enums;
using Dream.Space.Data.Extensions;
using Dream.Space.Indicators.Models;
using Dream.Space.Reader.Models;

namespace Dream.Space.Playground.Models
{
    public class IndicatorChartData
    {
        private readonly IIndicatorCalculator _calculator;
        public Indicator Indicator { get; }

        public IndicatorChartData(IIndicatorCalculator calculator, Indicator indicator)
        {
            _calculator = calculator;
            Indicator = indicator;
        }

        public List<IndicatorModel> Values { get; set; }


        public void Calculate(List<QuotesModel> quotes)
        {
            Values = _calculator.Calculate(Indicator, quotes);
        }

        public List<IndicatorModel> GetValues(ChartUpdateMode update)
        {
            switch (update.ModeType)
            {
                case ChartUpdateMode.UpdateMode.Insert:
                    return GetInsertedValues(update.Bars);

                case ChartUpdateMode.UpdateMode.Append:
                    return GetAppendedValues(update.Bars);

                default:
                    return Values;

            }
        }

        private List<IndicatorModel> GetAppendedValues(int bars)
        {
            switch (Indicator.Period)
            {
                case QuotePeriod.Daily:
                    return Values.Take(bars + 1).ToList();

                case QuotePeriod.Weekly:

                    var first = Values.First().Date.AddDays(-bars);
                    return Values.Where(v => v.Date >= first).ToList();

                default:
                    throw new ArgumentOutOfRangeException();
            }
        }

        private List<IndicatorModel> GetInsertedValues(int bars)
        {
            switch (Indicator.Period)
            {
                case QuotePeriod.Daily:
                    return Values.TakeLast(bars + 1).ToList();

                case QuotePeriod.Weekly:
                    var last = Values.Last().Date.AddDays(bars);
                    return Values.Where(v => v.Date <= last).ToList();

                default:
                    throw new ArgumentOutOfRangeException();
            }
        }
    }

    public class IndicatorsChartData : Dictionary<int, IndicatorChartData>
    {
    }
}