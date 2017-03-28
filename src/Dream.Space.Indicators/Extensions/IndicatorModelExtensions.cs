using System.Collections.Generic;
using System.Linq;
using Dream.Space.Indicators.Enums;
using Dream.Space.Indicators.Models;
using Dream.Space.Models.Indicators;
using Dream.Space.Models.Quotes;

namespace Dream.Space.Indicators.Extensions
{
    public static class IndicatorModelExtensions
    {
        public static List<IndicatorResult> Substract(this List<IndicatorResult> substractFrom, List<IndicatorResult> substractThis)
        {
            var result = from fromItem in substractFrom
                         join thisItem in substractThis
                         on fromItem.Date equals thisItem.Date
                         select new IndicatorResult(fromItem.Date) { Value = fromItem.Value - thisItem.Value };

            return result.ToList();
        }

        /// <summary>
        // 1. Green Price Bar: (13-period EMA > previous 13-period EMA) and (MACD-Histogram > previous period's MACD-Histogram)
        // 2. Red Price Bar: (13-period EMA<previous 13-period EMA) and (MACD-Histogram<previous period's MACD-Histogram)
        // 3. Else -> Blue Price Bar
        /// </summary>
        /// <param name="impulseData"></param>
        /// <returns></returns>
        public static List<IndicatorResult> AsImpulseSystemModel(this List<ImpulseData> impulseData)
        {
            var result = new List<IndicatorResult>();
            for (var i = 1; i < impulseData.Count; i++)
            {
                var today = impulseData[i - 1];
                var prev = impulseData[i];

                var color = ImpulseType.Neutral;
                if (today.Ema > prev.Ema && today.Histogram > prev.Histogram)
                {
                    color = ImpulseType.Green;    
                }
                if (today.Ema < prev.Ema && today.Histogram < prev.Histogram)
                {
                    color = ImpulseType.Red;
                }
                result.Add(new IndicatorResult(today.Date) { Value = (int)color});
            }
            return result;
        }

        public static List<QuotesModel> AsQuotesModel(this List<IndicatorResult> list, QuoteModelField mapValueTo)
        {
            var result = new List<QuotesModel>();
            foreach (var model in list)
            {
                var item = new QuotesModel() {Date = model.Date};

                switch (mapValueTo)
                {
                    case QuoteModelField.Open:
                        item.Open = model.Value;
                        break;
                    case QuoteModelField.Close:
                        item.Close = model.Value;
                        break;
                    case QuoteModelField.High:
                        item.High = model.Value;
                        break;
                    case QuoteModelField.Low:
                        item.Low = model.Value;
                        break;
                    case QuoteModelField.Volume:
                        item.Volume = model.Value;
                        break;
                }

                result.Add(item);
            }

            return result;
        }
    }
}
