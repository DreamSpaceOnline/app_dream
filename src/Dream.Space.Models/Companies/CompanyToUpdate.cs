using System;
using System.Collections.Generic;
using Dream.Space.Models.Quotes;
using Newtonsoft.Json;

namespace Dream.Space.Models.Companies
{
    public class CompanyToUpdate
    {
        public string Ticker { get; set; }
        public DateTime LastUpdated { get; set; }
        public string HistoryQuotesJson { get; set; }

        public List<QuotesModel> HistoryQuotes
        {
            get
            {

                try
                {
                    return JsonConvert.DeserializeObject<List<QuotesModel>>(HistoryQuotesJson);

                }
                catch (Exception)
                {
                    return new List<QuotesModel>();
                }
            }
            set { HistoryQuotesJson = JsonConvert.SerializeObject(value); }
        }

    }
}
