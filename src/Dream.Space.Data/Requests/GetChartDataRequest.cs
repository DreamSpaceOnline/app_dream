using Dream.Space.Models.Enums;

namespace Dream.Space.Data.Requests
{
    public class GetChartDataRequest
    {
        public string Ticker { get; set; }
        public QuotePeriod QuotePeriod { get; set; }
        public int Layout { get; set; }
    }
}