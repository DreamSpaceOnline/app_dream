using System;
using System.Globalization;

namespace Dream.Space.Models.Quotes
{
    //"date","close","volume","open","high","low"
    public class QuotesModel
    {
        public QuotesModel()
        {
            Impulse = 0;
        }

        public QuotesModel(StockQuote quote): this()
        {
            Date = quote.Date;
            Close = quote.Close;
            Open = quote.Open;
            High = quote.High;
            Low = quote.Low;
            Volume = quote.Volume;
        }

        public DateTime Date { get; set; }
        public Decimal Close { get; set; }
        public Decimal Volume { get; set;}

        public Decimal Open { get; set; }
        public Decimal High { get; set; }
        public Decimal Low { get; set; }
        public decimal Impulse { get; set; }
    }


}
