using System.Collections.Generic;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Indicators.Models;
using Dream.Space.Models.Indicators;
using Dream.Space.Reader.Models;

namespace Dream.Space.Calculators
{
    public interface IIndicatorCalculator
    {
        bool CanCalculate(Indicator indicator);
        List<IndicatorModel> Calculate(Indicator indicator, List<QuotesModel> quotes);
    }

    public interface IIndicatorCalculator<TModel> where TModel : IIndicatorModel
    {
        bool CanCalculate(Indicator indicator);
        List<TModel> Calculate(Indicator indicator, List<QuotesModel> quotes);
    }
}