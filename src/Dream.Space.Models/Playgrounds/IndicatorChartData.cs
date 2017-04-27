using System.Collections.Generic;
using Dream.Space.Models.Indicators;

namespace Dream.Space.Models.Playgrounds
{
    public class IndicatorChartData
    {
        public IIndicatorEntity Indicator { get; set; }
        public List<IndicatorResult> IndicatorValues { get; set; }
    }
}