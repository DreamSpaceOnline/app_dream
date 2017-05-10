using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Models.Indicators;
using Dream.Space.Models.Quotes;

namespace Dream.Space.Indicators
{
    public class LowerChannel : IIndicator<IndicatorResult, int>
    {
        public string Name => "LowerChannel";

        public List<IndicatorResult> Calculate(List<QuotesModel> quotes, int period)
        {
            if (!Validate(quotes, period))
            {
                return null;
            }

            var ema = new EMA();
            var emaResult = ema.Calculate(quotes, period);

            var initialMargin = quotes.Max(q => q.High - q.Low) / 2;
            var margin = initialMargin;

            while (InsideChannel(emaResult, quotes, margin) > 89)
            {
                margin = margin + initialMargin * (decimal) 0.1;
            }

            emaResult.ForEach(r => r.Value = r.Value - margin);

            return emaResult.OrderByDescending(r => r.Date).ToList();
        }

        private int InsideChannel(List<IndicatorResult> emaResult, List<QuotesModel> quotes, decimal margin)
        {
            if (!emaResult.Any()) return 0;

            var count = emaResult.Join(quotes,
                ema => ema.Date,
                quote => quote.Date,
                (ema, quote) =>

                    new {date = ema.Date, low = quote.Low, ema = ema.Value}
            ).Count(r => r.ema - margin < r.low)* 1.0;


            return (int) (count / emaResult.Count * 100);
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
