using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Charts
{
    public class ChartIndicator
    {
        public ChartType ChartType { get; set; }
        public string ChartName { get; set; }
        public string[] ChartHeader { get; set; }
        public string[] ChartData { get; set; }
        public string ChartColor { get; set; }
    }
}