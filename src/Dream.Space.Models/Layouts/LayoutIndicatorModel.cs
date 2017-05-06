using Dream.Space.Models.Indicators;
using Dream.Space.Models.Layourts;

namespace Dream.Space.Models.Layourts
{
    public class LayoutIndicatorModel : ILayoutIndicatorEntity
    {
        public int Id { get; set; }
        public int LayoutId { get; set; }
        public int IndicatorId { get; set; }
        public IIndicatorEntity Indicator { get; set; }
        public string Name { get; set; }
    }
}
