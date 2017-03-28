using System.Collections.Generic;
using Dream.Space.Models.Calculators;

namespace Dream.Space.Models.Indicators
{
    public class CompanyIndicatorResults: List<CompanyIndicatorResult>
    {
        public IIndicatorEntity Indicator { get; }

        public CompanyIndicatorResults(IIndicatorEntity indicator)
        {
            Indicator = indicator;
        }
    }
}