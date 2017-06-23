using System;
using System.Collections.Generic;

namespace Dream.Space.Models.Journals
{
    public class JournalModel : JournalHeader, IJournalEntity
    {
        public JournalModel()
        {
            Entries = new List<TradeOrder>();
            Exists = new List<TradeOrder>();
        }

        public List<TradeOrder> Entries { get; set; }
        public List<TradeOrder> Exists { get; set; }
        public string Summary { get; set; }
        public int StrategyId { get; set; }
        public decimal MaxRisk { get; set; }
        public DateTime EntryDate { get; set; }
        public DateTime ExitDate { get; set; }
    }
}