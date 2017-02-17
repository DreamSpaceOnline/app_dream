using System.Collections.Generic;
using Dream.Space.Reader.Models;

namespace Dream.Space.Playground.Models
{
    public class ChartUpdateMode
    {
        public enum UpdateMode
        {
            Reset,
            Insert,
            Append
        }

        public ChartUpdateMode(UpdateMode mode, List<QuotesModel> quotes)
        {
            Mode = mode.ToString().ToLower();
            ModeType = mode;
            Bars = (quotes ?? new List<QuotesModel>()).Count;
            Quotes = quotes;
        }

        public List<QuotesModel> Quotes { get; set; }

        public UpdateMode ModeType { get; set; }

        public string Mode { get; set; }
        public int Bars { get; set; }
    }
}