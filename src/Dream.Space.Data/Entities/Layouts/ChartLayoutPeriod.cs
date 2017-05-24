using Dream.Space.Models.Enums;
using Dream.Space.Models.Layouts;

namespace Dream.Space.Data.Entities.Layouts
{
    public class ChartLayoutPeriod : IChartLayoutPeriodEntity
    {
        public int Id { get; set; }
        public int LayoutId { get; set; }
        public QuotePeriod Period { get; set; }


    }
}