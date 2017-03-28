using System.Collections.Generic;
using Dream.Space.Indicators.Models;
using Dream.Space.Models.Indicators;
using Dream.Space.Models.Quotes;
using Dream.Space.Reader.Models;

namespace Dream.Space.Indicators
{
    public interface IIndicator<TModel, TParams> where TModel : IIndicatorResult
    {
        List<TModel> Calculate(List<QuotesModel> quotes, TParams inputParams);
        string Name { get; }
    }
}