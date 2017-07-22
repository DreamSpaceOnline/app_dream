using System;
using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Journals
{
    public interface IJournalEntity
    {
        int JournalId { get; set; }
        DateTime Created { get; set; }
        DateTime EntryDate { get; set; }
        DateTime ExitDate { get; set; }
        string UserId { get; set; }
        string Summary { get; set; }
        string Ticker { get; set; }
        TradeDirection TradeDirection { get; set; }
        decimal EntryPrice { get; set; }
        decimal StopLossPrice { get; set; }
        decimal TakeProfitPrice { get; set; }
        decimal MaxRiskValuePrice { get; set; }
        decimal RewardRiskRatio { get; set; }
        int MaxSharesCount { get; set; }
        int AccountId { get; set; }
        int StrategyId { get; set; }
    }
}
