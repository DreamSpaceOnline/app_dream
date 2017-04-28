using System.Collections.Generic;
using Dream.Space.Models.Indicators;

namespace Dream.Space.Models.Charts
{
    public class ChartLayoutModel: IChartLayoutEntity
    {
        public ChartLayoutModel()
        {
            Indicators = new List<IIndicatorEntity>();
        }
        public IList<IIndicatorEntity> Indicators { get; set; }

        public int LayoutId { get; set; }
        public string Title { get; set; }
        public bool Deleted { get; set; }
    }
}
