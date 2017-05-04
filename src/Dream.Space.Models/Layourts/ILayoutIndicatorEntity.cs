namespace Dream.Space.Models.Layourts
{
    public interface ILayoutIndicatorEntity
    {
        int Id { get; set; }
        int LayoutId { get; set; }
        int IndicatorId { get; set; }
    }
}