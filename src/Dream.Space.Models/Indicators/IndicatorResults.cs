using System.Collections.Generic;
using Dream.Space.Models.Calculators;

namespace Dream.Space.Models.Indicators
{
    public class IndicatorResults: List<IndicatorResult>
    {
        public IIndicatorEntity Indicator { get; }

        public IndicatorResults(IIndicatorEntity indicator)
        {
            Indicator = indicator;
        }

        public void Merge(IIndicatorCalculator calculator)
        {
            //calculator.Merge(this);
        }
    }
}