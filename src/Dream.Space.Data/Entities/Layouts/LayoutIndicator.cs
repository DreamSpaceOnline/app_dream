using Dream.Space.Models.Layourts;

namespace Dream.Space.Data.Entities.Layouts
{
    public class LayoutIndicator: ILayoutIndicatorEntity
    {
        public int Id { get; set; }
        public int LayoutId { get; set; }
        public int IndicatorId { get; set; }
    }
}
