using System.Collections.Generic;

namespace Dream.Space.Models.Indicators
{
    public class CompanyIndicatorResult
    {
        public string Ticker { get; }
        public IList<IndicatorResult> Result { get; }

        public CompanyIndicatorResult(string ticker, IList<IndicatorResult> result)
        {
            Ticker = ticker;
            Result = result;
        }
    }
}