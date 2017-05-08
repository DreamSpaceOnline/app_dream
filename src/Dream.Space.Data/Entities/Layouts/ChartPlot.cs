using Dream.Space.Models.Layouts;

namespace Dream.Space.Data.Entities.Layouts
{
    public class ChartPlot: IChartPlotEntity
    {
        public int LayoutId { get; set; }
        public int PlotId { get; set; }
        public int OrderId { get; set; }
        public int Height { get; set; }
    }

}

