using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Layourts
{
    public interface IChartLayoutEntity
    {
        int LayoutId { get; set; }
        string Title { get; set; }
        bool Deleted { get; set; }
        QuotePeriod Period { get; set; }
        bool Default { get; set; }
    }
}