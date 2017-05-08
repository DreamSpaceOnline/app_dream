using System.Collections.Generic;

namespace Dream.Space.Models.Layouts
{
    public interface IChartPlotEntity
    {
        int LayoutId { get; set; }
        int PlotId { get; set; }
        int OrderId { get; set; }
        int Height { get; set; }
    }

    public class ChartPlotModel: IChartPlotEntity
    {
        public ChartPlotModel()
        {
            Indicators = new List<LayoutIndicatorModel>();
        }

        public ChartPlotModel(IChartPlotEntity plot):this()
        {
            if (plot == null) return;

            LayoutId = plot.LayoutId;
            PlotId = plot.PlotId;
            OrderId = plot.OrderId;
            Height = plot.Height;
        }

        public int LayoutId { get; set; }
        public int PlotId { get; set; }
        public int OrderId { get; set; }
        public int Height { get; set; }

        public IList<LayoutIndicatorModel> Indicators { get; set; }
    }
}
