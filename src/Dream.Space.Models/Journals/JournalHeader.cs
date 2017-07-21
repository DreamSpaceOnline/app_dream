using System;
using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Journals
{
    public class JournalHeader
    {
        public int JournalId { get; set; }
        public string Ticker { get; set; }
        public int AccountId { get; set; }
        public int MaxSharesCount { get; set; }
        public string AccountName { get; set; }
        public DateTime Created { get; set; }
        public string UserId { get; set; }
        public TradeDirection TradeDirection { get; set; }
        public decimal EntryPrice { get; set; }
        public decimal StopLossPrice { get; set; }
        public decimal TakeProfitPrice { get; set; }
        public decimal MaxRiskValuePrice { get; set; }
        public decimal RewardRiskRatio { get; set; }

    }

}