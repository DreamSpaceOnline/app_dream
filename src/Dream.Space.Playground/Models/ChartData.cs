using System.Collections.Generic;
using Dream.Space.Data.Enums;
using Dream.Space.Reader.Models;

namespace Dream.Space.Playground.Models
{
    public class ChartData
    {
        public List<QuotesModel> Quotes { get; set; }
        public List<IndicatorChartData> Indicators { get; set; }
        public QuotePeriod Period { get; set; }
    }
}