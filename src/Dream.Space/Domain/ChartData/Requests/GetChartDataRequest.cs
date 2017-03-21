using Dream.Space.Models.Enums;

namespace Dream.Space.Domain.ChartData.Requests
{
    public class GetChartDataRequest
    {
        public string Ticker { get; set; }
        public QuotePeriod QuotePeriod { get; set; }
    }
}