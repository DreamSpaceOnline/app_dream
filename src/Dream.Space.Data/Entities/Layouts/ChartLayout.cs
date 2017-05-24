using System;
using Dream.Space.Models.Layouts;

namespace Dream.Space.Data.Entities.Layouts
{
    public class ChartLayout: IChartLayoutEntity
    {
        public int LayoutId { get; set; }
        public string Title { get; set; }
        public bool Deleted { get; set; }
        public bool Default { get; set; }
        public string Description { get; set; }
    }
}
