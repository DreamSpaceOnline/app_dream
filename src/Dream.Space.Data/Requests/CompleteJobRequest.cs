using System.Collections.Generic;

namespace Dream.Space.Data.Requests
{
    public class CompleteJobRequest
    {
        public CompleteJobRequest()
        {
            Tickers = new List<string>();
        }
        public string JobId { get; set; }
        public IList<string> Tickers { get; set; }
    }
}