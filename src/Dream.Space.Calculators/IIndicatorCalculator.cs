using System.Collections.Generic;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Indicators.Models;
using Dream.Space.Reader.Models;

namespace Dream.Space.Calculators
{
    public interface IIndicatorCalculator
    {
        bool CanCalculate(Indicator indicator);
        List<IndicatorModel> Calculate(Indicator indicator, List<QuotesModel> quotes);
        //IndicatorModel Calculate(Indicator indicator, List<IndicatorModel> values, QuotesModel quotes);
    }
}