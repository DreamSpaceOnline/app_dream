using System;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Journals;

namespace Dream.Space.Data.Entities.Journals
{
    public class Journal: IJournalEntity
    {
        public int JournalId { get; set; }
        public DateTime Created { get; set; }
        public DateTime EntryDate { get; set; }
        public DateTime ExitDate { get; set; }
        public string UserId { get; set; }
        public string Summary { get; set; }
        public string Ticker { get; set; }
        public TradeType Trade { get; set; }
        public decimal EntryPrice { get; set; }
        public decimal StopLossPrice { get; set; }
        public decimal TakeProfitPrice { get; set; }
        public int AccountId { get; set; }
        public int StrategyId { get; set; }
        public decimal MaxRisk { get; set; }
    }
}
