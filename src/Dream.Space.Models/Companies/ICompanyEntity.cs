using System;

namespace Dream.Space.Models.Companies
{
    public interface ICompanyEntity
    {
        string Ticker { get; set; }
        string Name { get; set; }
        decimal MarketCap { get; set; }
        DateTime LastUpdated { get; set; }
        DateTime LastCalculated { get; set; }
        decimal Volume { get; set; }
        decimal Price { get; set; }
        decimal HighestPrice52 { get; set; }
        decimal LowestPrice52 { get; set; }
        int ChaosPercentage { get; set; }
        string HistoryQuotesJson { get; set; }
        DateTime NextReportDate { get; set; }
        bool UpdateSuccessful { get; set; }
        string UpdateError { get; set; }
        bool CalculatedSuccessful { get; set; }
        string CalculatedError { get; set; }
        bool Filtered { get; set; }
        DateTime StartDate { get; set; }
        DateTime EndDate { get; set; }
        int SectorId { get; set; }
        int IndustryId { get; set; }
        bool SP500 { get; set; }
        bool IsIndex { get; set; }

    }
}
