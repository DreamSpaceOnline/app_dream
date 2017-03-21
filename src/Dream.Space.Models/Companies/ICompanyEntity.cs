using System;

namespace Dream.Space.Models.Companies
{
    public interface ICompanyEntity
    {
        string Ticker { get; set; }
        string Name { get; set; }
        string Sector { get; set; }
        string Industry { get; set; }
        DateTime LastUpdated { get; set; }
        decimal Volume { get; set; }
        decimal Price { get; set; }
        decimal HighestPrice52 { get; set; }
        decimal LowestPrice52 { get; set; }
        int ChaosPercentage { get; set; }
        bool UpdateSuccessful { get; set; }
        string UpdateError { get; set; }
    }
}
