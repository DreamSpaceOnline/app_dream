using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Dream.Space.Models.Companies;
using Dream.Space.Models.Quotes;
using Newtonsoft.Json;

namespace Dream.Space.Data.Entities.Companies
{
    public class Company : ICompanyEntity
    {
        public Company()
        {
            LastUpdated = DateTime.Today.AddMonths(-1);
            LastCalculated = DateTime.Today.AddMonths(-1);
            NextReportDate = DateTime.Today.AddMonths(-1);
        }

        public string Ticker { get; set; }
        public string Name { get; set; }
        public decimal MarketCap { get; set; }
        public string Sector { get; set; }
        public string Industry { get; set; }
        public string SummaryUrl { get; set; }
        public DateTime LastUpdated { get; set; }
        public DateTime LastCalculated { get; set; }
        public decimal Volume { get; set; }
        public decimal Price { get; set; }
        public decimal HighestPrice52 { get; set; }
        public decimal LowestPrice52 { get; set; }
        public int ChaosPercentage { get; set; }
        public string LiveQuoteJson { get; set; }
        public string HistoryQuotesJson { get; set; }
        public DateTime NextReportDate { get; set; }

        [NotMapped]
        public List<QuotesModel> HistoryQuotes
        {
            get { return JsonConvert.DeserializeObject<List<QuotesModel>>(HistoryQuotesJson); }
            set { HistoryQuotesJson = JsonConvert.SerializeObject(value); }
        }

        public bool UpdateSuccessful { get; set; }
        public string UpdateError { get; set; }
        public bool CalculatedSuccessful { get; set; }
        public string CalculatedError { get; set; }
        public bool Filtered { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int SectorId { get; set; }
        public int IndustryId { get; set; }
        public string LastJobId { get; set; }
    }
}
