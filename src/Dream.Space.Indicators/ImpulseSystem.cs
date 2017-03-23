using System.Collections.Generic;
using System.Linq;
using Dream.Space.Indicators.Extensions;
using Dream.Space.Indicators.IndicatorParams;
using Dream.Space.Indicators.Models;
using Dream.Space.Models.Indicators;
using Dream.Space.Models.Quotes;
using Dream.Space.Reader.Models;

namespace Dream.Space.Indicators
{
    /*
        Calculation: 

        Green Price Bar: (13-period EMA > previous 13-period EMA) and 
                         (MACD-Histogram > previous period's MACD-Histogram)

        Red Price Bar: (13-period EMA < previous 13-period EMA) and 
                       (MACD-Histogram < previous period's MACD-Histogram)

        Price bars are colored blue when conditions for a Red Price Bar or 
        Green Price Bar are not met. The MACD-Histogram is based on MACD(12,26,9). 
    */

    /// <summary>
    ///  The Impulse System is based on two indicators, a 13-day exponential moving average and the MACD-Histogram. 
    ///  The moving average identifies the trend, while the MACD-Histogram measures momentum.
    /// </summary>
    public class ImpulseSystem : IIndicator<IndicatorModel, ImpulseSystemParams>
    {
        public string Name => "ImpulseSystem";

        public List<IndicatorModel> Calculate(List<QuotesModel> quotes, ImpulseSystemParams inputParams)
        {
            var macdHist = new MACD().Calculate(quotes, inputParams.MacdParams);
            var ema = new EMA().Calculate(quotes, inputParams.EmaPeriod);
            var impulseData = (from h in macdHist
                         join e in ema
                         on h.Date equals e.Date
                         select new ImpulseData { Date = h.Date, Histogram = h.Value, Ema = e.Value})
                    .ToList();

            return impulseData.AsImpulseSystemModel().OrderByDescending(r => r.Date).ToList(); 
        }

    }
}
