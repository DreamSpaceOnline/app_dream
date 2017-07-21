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
        public TradeDirection TradeDirection { get; set; }
        public decimal EntryPrice { get; set; }
        public decimal StopLossPrice { get; set; }
        public decimal TakeProfitPrice { get; set; }
        public int AccountId { get; set; }
        public int StrategyId { get; set; }
        public decimal MaxRiskValuePrice { get; set; }
        public decimal RewardRiskRatio { get; set; }
        public int MaxSharesCount { get; set; }
    }
}
