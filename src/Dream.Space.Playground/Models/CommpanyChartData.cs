using System.Collections.Generic;
using Dream.Space.Reader.Models;

namespace Dream.Space.Playground.Models
{
    public class CommpanyChartData
    {
        public CommpanyChartData(List<QuotesModel> quotes)
        {
            Quotes = new HistoricalQuotes(quotes);

        }
        public CommpanyChartData()
        {
            Quotes = new HistoricalQuotes();
        }

        public string Name { get; set; }
        public HistoricalQuotes Quotes { get; set; }

    }
}