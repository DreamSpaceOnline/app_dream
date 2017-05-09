using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Models.Indicators;
using Dream.Space.Models.Quotes;

namespace Dream.Space.Indicators
{
    /*
    Use the following steps to calculate a 22 day EMA:

    1) Start by calculating 'k' for the given timeframe. 2 / (22 + 1) = 0,0869
    2) Add the closing prices for the first 22 days together and divide them by 22.
    3) You’re now ready to start getting the first EMA day by taking the following day’s (day 23) closing price multiplied by k, then multiply the previous day’s moving average by (1-k) and add the two.
    4) Do step 3 over and over for each day that follows to get the full range of EMA.

    */


    /// <summary>
    /// EMA = Price(t) * k + EMA(y) * (1 – k)
    /// where: t = today, y = yesterday, N = number of days in EMA, k = 2/(N+1)
    /// </summary>
    public class UpperChannel : IIndicator<IndicatorResult, int>
    {
        public string Name => "UpperChannel";

        public List<IndicatorResult> Calculate(List<QuotesModel> quotes, int period)
        {
            if (!Validate(quotes, period))
            {
                return null;
            }

            var result = new List<IndicatorResult>();
            var ema = new EMA();
            var emaResult = ema.Calculate(quotes, period);


            return result.OrderByDescending(r => r.Date).ToList();
        }

        private bool Validate(List<QuotesModel> quotes, int period)
        {
            if (period < 2 || quotes == null || quotes.Count <= period)
            {
                return false;
            }
            return true;
        }

    }
}
