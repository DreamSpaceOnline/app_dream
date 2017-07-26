using System;
using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Accounts
{
    public interface IAccountTradeEntity
    {
        int TradeId { get; set; }
        int AccountId { get; set; }
        decimal EntryPrice { get; set; }
        TradeDirection Direction { get; set; }
        DateTime EntryDate { get; set; }
        DateTime CloseDate { get; set; }
        int SharesCount { get; set; }
        decimal ClosePrice { get; set; }
    }
}