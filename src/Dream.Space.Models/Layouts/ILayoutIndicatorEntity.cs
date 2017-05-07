using Dream.Space.Models.Indicators;

namespace Dream.Space.Models.Layourts
{
    public interface ILayoutIndicatorEntity
    {
        int Id { get; set; }
        int LayoutId { get; set; }
        int OrderId { get; set; }
        int IndicatorId { get; set; }
        IIndicatorEntity Indicator { get; set; }
        string Name { get; set; }
        string LineColor { get; set; }
    }
}