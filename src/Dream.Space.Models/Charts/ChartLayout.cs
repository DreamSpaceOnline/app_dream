using System.Collections.Generic;
using Dream.Space.Models.Indicators;

namespace Dream.Space.Models.Charts
{
    public class ChartLayout
    {
        public ChartLayout()
        {
            Indicators = new List<IIndicatorEntity>();
        }
        public IList<IIndicatorEntity> Indicators { get; set; }
    }
}
