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
        TradeType Trade { get; set; }
        decimal EntryPrice { get; set; }
        decimal StopLossPrice { get; set; }
        decimal TakeProfitPrice { get; set; }
        int AccountId { get; set; }
        int StrategyId { get; set; }
        decimal MaxRisk { get; set; }
    }
}
