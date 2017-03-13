using System.Collections.Generic;
using Dream.Space.Indicators.Models;
using Dream.Space.Models.Indicators;
using Dream.Space.Reader.Models;

namespace Dream.Space.Indicators
{
    public interface IIndicator<TModel, TParams> where TModel : IIndicatorModel
    {
        List<TModel> Calculate(List<QuotesModel> quotes, TParams inputParams);
        string Name { get; }
    }
}