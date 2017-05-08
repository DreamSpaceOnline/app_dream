namespace Dream.Space.Models.Layouts
{
    public class LayoutIndicatorModel 
    {
        public int Id { get; set; }
        public int PlotId { get; set; }
        public int IndicatorId { get; set; }
        public int OrderId { get; set; }
        public IndicatorModel Indicator { get; set; }
        public string Name { get; set; }
        public string LineColor { get; set; }
    }
}
