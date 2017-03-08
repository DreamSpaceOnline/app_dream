using CsvHelper.Configuration;

namespace Dream.Space.Reader.Models
{
    //"Symbol","Name","LastSale","MarketCap","IPOyear","Sector","industry","Summary Url"
    public sealed class CompanyModelMap : CsvClassMap<CompanyModel>
    {
        public CompanyModelMap()
        {
            Map(m => m.Ticker).Index(0);
            Map(m => m.Name).Index(1);
            Map(m => m.Price).Index(2).ConvertUsing(row =>
            {
                decimal price = 0;
                if (decimal.TryParse(row.GetField(2), out price))
                {
                    return price;
                }
                return 0;
            });
            Map(m => m.IsActive).Index(2).ConvertUsing(row =>
            {
                decimal price = 0;
                if (decimal.TryParse(row.GetField(2), out price))
                {
                    return price > 1 ? 1 : 0;
                }
                return 0;
            });
            //Map(m => m.MarketCap).Index(3).ConvertUsing(row =>
            //{
            //    var sprice = row.GetField(3);

            //    try
            //    {
            //        return decimal.Parse(sprice, NumberStyles.Currency | NumberStyles.AllowCurrencySymbol | NumberStyles.AllowHexSpecifier);
            //    }
            //    catch (Exception)
            //    {
            //        return 0;
            //    }

            //});
            Map(m => m.Sector).Index(5);
            Map(m => m.Industry).Index(6);
            Map(m => m.SummaryUrl).Index(7);
        }
    }
}