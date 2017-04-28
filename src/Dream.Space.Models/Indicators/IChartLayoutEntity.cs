namespace Dream.Space.Models.Indicators
{
    public interface IChartLayoutEntity
    {
        int LayoutId { get; set; }
        string Title { get; set; }
        bool Deleted { get; set; }
    }
}