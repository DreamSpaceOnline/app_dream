using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Layouts
{
    public interface IChartLayoutEntity
    {
        int LayoutId { get; set; }
        string Title { get; set; }
        string Description{ get; set; }
        bool Deleted { get; set; }
        bool Default { get; set; }
    }
}