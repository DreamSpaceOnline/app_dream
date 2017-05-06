using System;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Layourts;

namespace Dream.Space.Data.Entities.Layouts
{
    public class ChartLayout: IChartLayoutEntity
    {
        public int LayoutId { get; set; }
        public string Title { get; set; }
        public bool Deleted { get; set; }
        public QuotePeriod Period { get; set; }
        public bool Default { get; set; }
        public string Description { get; set; }
    }
}
