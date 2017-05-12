using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Indicators
{
    public class IndicatorValueItem
    {
        public ValueKind Kind { get; set; }
        public string Name => Kind.ToString();
        public decimal Value { get; set; }
        public string LineColor { get; set; }
        public ChartType ChartType { get; set; }
    }
}