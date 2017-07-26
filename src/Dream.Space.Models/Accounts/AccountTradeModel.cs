using System;
using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Accounts
{
    public class AccountTradeModel : IAccountTradeEntity
    {
        public int TradeId { get; set; }
        public int AccountId { get; set; }
        public decimal EntryPrice { get; set; }
        public TradeDirection Direction { get; set; }
        public DateTime EntryDate { get; set; }
        public DateTime CloseDate { get; set; }
        public int SharesCount { get; set; }
        public decimal ClosePrice { get; set; }
    }
}