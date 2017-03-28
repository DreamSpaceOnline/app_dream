using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Models.Indicators;
using Dream.Space.Models.Quotes;

namespace Dream.Space.Indicators
{
    /*

                      100
        RSI = 100 - --------
                     1 + RS

        RS = Average Gain / Average Loss    

        First Average Gain = Sum of Gains over the past 14 periods / 14. (Close - Prev Close)
        First Average Loss = Sum of Losses over the past 14 periods / 14

        The second, and subsequent, calculations are based on the prior averages and the current gain loss:

        Average Gain = [(previous Average Gain) x 13 + current Gain] / 14.
        Average Loss = [(previous Average Loss) x 13 + current Loss] / 14.

 */


    public class RSI : IIndicator<IndicatorResult, int>
    {
        public string Name => "RSI";

        public List<IndicatorResult> Calculate(List<QuotesModel> quotes, int period)
        {
            if (!Validate(quotes, period))
            {
                return null;
            }

            var queue = new Queue<QuotesModel>(quotes.OrderBy(c => c.Date).ToList());

            var rs = CalcInitialRS(period, queue);
            var result = new List<IndicatorResult> {new IndicatorResult(rs.LastDate) { Value = rs.Calculate()}};

            foreach (var item in queue)
            {
                rs.PrepareNext(item);

                result.Insert(0, new IndicatorResult(rs.LastDate) { Value = rs.Calculate() });
            }


            return result;
        }

        private RelativeStrength CalcInitialRS(int period, Queue<QuotesModel> queue)
        {
            var prev = queue.Dequeue();
            decimal initialGain = 0;
            decimal initialLoss = 0;

            var current = new QuotesModel();
            for (var index = 0; index < period; index++)
            {
                current = queue.Dequeue();

                initialGain += Math.Max(current.Close - prev.Close, 0);
                initialLoss += Math.Max(prev.Close - current.Close, 0);
            }

            return new RelativeStrength(period)
            {
                AverageGain = initialGain / period,
                AverageLoss = initialLoss / period,
                LastClose = current.Close,
                LastDate = current.Date
            };

        }

        private bool Validate(List<QuotesModel> quotes, int period)
        {
            if (period < 2 || quotes == null || quotes.Count <= period)
            {
                return false;
            }
            return true;
        }

        private class RelativeStrength
        {
            public RelativeStrength(int period)
            {
                Period = period;
            }

            public int Period { get; }
            public decimal AverageGain { get; set; }
            public decimal AverageLoss { get; set; }
            public decimal LastClose { get; set; }
            public DateTime LastDate { get; set; }

            public decimal Calculate()
            {
                if (AverageLoss == 0)
                {
                    return 100;
                }

                if (AverageGain == 0)
                {
                    return 0;
                }

                var rs = AverageGain / AverageLoss;
                return 100 - (100 / (1 + rs));
            }

            public void PrepareNext(QuotesModel quote)
            {
                AverageGain = (AverageGain * (Period - 1) + CurrentGain(quote.Close)) / Period;
                AverageLoss = (AverageLoss * (Period - 1) + CurrentLoss(quote.Close)) / Period;
                LastClose = quote.Close;
                LastDate = quote.Date;
            }

            private decimal CurrentGain(decimal close)
            {
                if (close - LastClose > 0)
                {
                    return close - LastClose;
                }

                return 0;
            }
            private decimal CurrentLoss(decimal close)
            {
                if (close - LastClose < 0)
                {
                    return LastClose - close;
                }

                return 0;
            }
        }
    }
}
