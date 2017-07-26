using System;

namespace Dream.Space.Data.Requests.Accounts
{
    public class CloseTradeRequest
    {
        public int AccountId { get; set; }
        public int TradeId { get; set; }
        public DateTime CloseDate { get; set; }
        public decimal ClosePrice { get; set; }
    }
}