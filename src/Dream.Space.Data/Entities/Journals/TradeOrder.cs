using System;
using Dream.Space.Models.Journals;

namespace Dream.Space.Data.Entities.Journals
{
    public class TradeOrder: ITradeOrderEntity
    {
        public int JournalId { get; set; }
        public DateTime Created { get; set; }
        public decimal SharePrice { get; set; }
        public int SharesCount { get; set; }
        public int TradeOrderId { get; set; }
    }
}
