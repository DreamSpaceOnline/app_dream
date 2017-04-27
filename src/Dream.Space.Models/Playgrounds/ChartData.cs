using System.Collections.Generic;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Quotes;

namespace Dream.Space.Models.Playgrounds
{
    public class ChartData
    {
        public List<QuotesModel> Quotes { get; set; }
        public List<IndicatorChartData> Indicators { get; set; }
        public QuotePeriod Period { get; set; }
        public string Name => Period.ToString();
    }
}