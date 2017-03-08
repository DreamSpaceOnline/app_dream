namespace Dream.Space.Reader.Models
{
    public class CompanyModel
    {
        public string Ticker { get; set; }
        public string Name { get; set; }
        public string Sector { get; set; }
        public string Industry { get; set; }
        public string SummaryUrl { get; set; }
        public string Exchange { get; set; }
        public int IsActive { get; set; }
        public decimal MarketCap { get; set; }
        public decimal Price { get; set; }
    }
}
