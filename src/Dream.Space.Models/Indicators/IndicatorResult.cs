using System.Collections.Generic;

namespace Dream.Space.Models.Indicators
{
    public class IndicatorResult
    {
        public string Ticker { get; }
        public IList<IndicatorModel> Result { get; }

        public IndicatorResult(string ticker, IList<IndicatorModel> result)
        {
            Ticker = ticker;
            Result = result;
        }
    }
}