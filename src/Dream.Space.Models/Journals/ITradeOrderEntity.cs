using System;

namespace Dream.Space.Models.Journals
{
    public interface ITradeOrderEntity
    {
        int TradeOrderId { get; set; }
        int JournalId { get; set; }
        DateTime Created { get; set; }
        decimal SharePrice { get; set; }
        int SharesCount { get; set; }
    }
}