namespace Dream.Space.Data.Requests
{
    public class CompanySearchRequest
    {
        public CompanySearchRequest()
        {
            MaxCount = 20;
        }

        public string Ticker { get; set; }
        public int MaxCount { get; set; }
    }
}
