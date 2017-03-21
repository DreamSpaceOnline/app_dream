using System.Collections.Generic;
using System.Linq;
using Dream.Space.Models.Indicators;
using Dream.Space.Models.Quotes;
using Dream.Space.Reader.Models;

namespace Dream.Space.Indicators
{
    /// <summary>
    /// period = 20 days, 65 days and 356 days
    /// </summary>
    public class NHNL : IIndicator<IndicatorModel, int>
    {
        public string Name => "NHNL";

        public List<IndicatorModel> Calculate(List<QuotesModel> quotes, int period)
        {
            if (!Validate(quotes, period))
            {
                return null;
            }

            var result = new List<IndicatorModel>();
            var ordered = quotes.OrderBy(q => q.Date).ToList();

            for (var index = 0; index < quotes.Count - period; index++)
            {
                var periodQuotes = ordered.Skip(index).Take(period).ToList();
                var latestQuotes = periodQuotes.Last();

                var isNewHigh = periodQuotes
                    .Where(q => q.Date != latestQuotes.Date)
                    .All(q => q.Close < latestQuotes.Close) ? 1: 0;

                var isNewLow = periodQuotes
                    .Where(q => q.Date != latestQuotes.Date)
                    .All(q => q.Close > latestQuotes.Close) ? -1 : 0;

                var model = new IndicatorModel
                {
                    Date = latestQuotes.Date
                };

                model.Values.Add(IndicatorModel.ValueType.NewNigh, isNewHigh);
                model.Values.Add(IndicatorModel.ValueType.NewLow, isNewLow);
                result.Add(model);
            }

            return result.OrderByDescending(r => r.Date).ToList();
        }

        private bool Validate(List<QuotesModel> quotes, int period)
        {
            if (quotes == null || quotes.Count <= (int)period)
            {
                return false;
            }
            return true;
        }

    }
}
