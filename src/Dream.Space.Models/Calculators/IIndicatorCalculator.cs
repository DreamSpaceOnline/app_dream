using System.Collections.Generic;
using Dream.Space.Models.Indicators;
using Dream.Space.Models.Quotes;

namespace Dream.Space.Models.Calculators
{
    public interface IIndicatorCalculator
    {
        bool CanCalculate(IIndicatorEntity indicator);
        List<IndicatorModel> Calculate(IIndicatorEntity indicator, List<QuotesModel> quotes);
        //void Merge(IndicatorResults indicatorResults);
    }

}