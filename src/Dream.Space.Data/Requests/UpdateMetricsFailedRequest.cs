using System;

namespace Dream.Space.Data.Requests
{
    public class UpdateMetricsFailedRequest
    {
        public string Ticker { get; set; }
        public DateTime CalculatedTime { get; set; }
        public string ErrorMessage { get; set; }
    }
}