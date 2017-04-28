using Dream.Space.Models.Indicators;

namespace Dream.Space.Data.Entities.Indicators
{
    public class ChartLayout: IChartLayoutEntity
    {
        public int LayoutId { get; set; }
        public string Title { get; set; }
        public bool Deleted { get; set; }
    }
}
