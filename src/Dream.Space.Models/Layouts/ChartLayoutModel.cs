using System.Collections.Generic;
using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Layouts
{
    public class ChartLayoutModel: IChartLayoutEntity
    {
        public ChartLayoutModel()
        {
            Plots = new List<ChartPlotModel>();
        }
        public IList<ChartPlotModel> Plots { get; set; }

        public int LayoutId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public bool Deleted { get; set; }
        public QuotePeriod Period { get; set; }
        public bool Default { get; set; }
    }
}
