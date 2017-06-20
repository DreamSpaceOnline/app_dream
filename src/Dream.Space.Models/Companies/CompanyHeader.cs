using System;

namespace Dream.Space.Models.Companies
{
    public class CompanyHeader
    {
 
        public CompanyHeader(ICompanyEntity company)
        {
            Ticker = company.Ticker;
            Name = company.Name;
            LastUpdated = company.LastUpdated;
            Volume = company.Volume;
            Price = company.Price;
            HighestPrice52 = company.HighestPrice52;
            LowestPrice52 = company.LowestPrice52;
            ChaosPercentage = company.ChaosPercentage;
            UpdateSuccessful = company.UpdateSuccessful;
            UpdateError = company.UpdateError;
            Filtered = company.Filtered;
            MarketCap = company.MarketCap;
            LastCalculated = company.LastCalculated;
            NextReportDate = company.NextReportDate;
            CalculatedSuccessful = company.CalculatedSuccessful;
            CalculatedError = company.CalculatedError;
            StartDate = company.StartDate;
            EndDate = company.EndDate;
            SectorId = company.SectorId;
            IndustryId = company.IndustryId;
            SP500 = company.SP500;
            IsIndex = company.IsIndex;
        }

        public CompanyHeader()
        {
            LastUpdated = DateTime.Today.AddMonths(-1);
        }

        public string Ticker { get; set; }
        public string Name { get; set; }
        public DateTime LastUpdated { get; set; }
        public decimal Volume { get; set; }
        public decimal Price { get; set; }
        public decimal HighestPrice52 { get; set; }
        public decimal LowestPrice52 { get; set; }
        public int ChaosPercentage { get; set; }
        public bool UpdateSuccessful { get; set; }
        public bool Filtered { get; set; }
        public string FullName => $"{Ticker} - {Name}";
        public string UpdateError { get; set; }

        public decimal MarketCap { get; set; }
        public DateTime LastCalculated { get; set; }
        public DateTime NextReportDate { get; set; }
        public bool CalculatedSuccessful { get; set; }
        public string CalculatedError { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int SectorId { get; set; }
        public int IndustryId { get; set; }
        public bool SP500 { get; set; }
        public bool IsIndex { get; set; }
    }
}
