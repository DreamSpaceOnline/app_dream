using System.Collections.Generic;
using Dream.Space.Models.Indicators;
using Dream.Space.Models.Quotes;

namespace Dream.Space.Models.Calculators
{
    public interface IIndicatorCalculator
    {
        bool CanCalculate(IIndicatorEntity indicator);
        List<IndicatorResult> Calculate(IIndicatorEntity indicator, List<QuotesModel> quotes);
        List<IndicatorResult> Merge(List<CompanyIndicatorResult> indicatorResultValue);
    }

}