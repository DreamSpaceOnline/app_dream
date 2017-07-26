using System;
using Dream.Space.Models.Enums;

namespace Dream.Space.Data.Requests.Accounts
{
    public class CreateTradeRequest
    {
        public int AccountId { get; set; }
        public DateTime EntryDate { get; set; }
        public decimal EntryPrice { get; set; }
        public TradeDirection Direction { get; set; }
        public int SharesCount { get; set; }
    }
}