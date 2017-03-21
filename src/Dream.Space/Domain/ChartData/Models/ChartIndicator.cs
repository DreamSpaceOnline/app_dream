using Dream.Space.Models.Enums;

namespace Dream.Space.Domain.ChartData.Models
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