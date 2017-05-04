using System.Collections.Generic;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Indicators;

namespace Dream.Space.Models.Layourts
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
        public QuotePeriod Period { get; set; }
        public bool Default { get; set; }
    }
}
