using System;

namespace Dream.Space.Models.Journals
{
    public class TradeOrder : ITradeOrderEntity
    {
        public DateTime Created { get; set; }
        public int JournalId { get; set; }
        public decimal SharePrice { get; set; }
        public int SharesCount { get; set; }
        public int TradeOrderId { get; set; }
    }
}