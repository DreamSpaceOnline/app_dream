using System;
using System.Collections.Generic;
using Dream.Space.Reader.Models;
using Newtonsoft.Json;

namespace Dream.Space.Data.Models
{
    public class CompanyToProcess
    {
        public string Ticker { get; set; }
        public DateTime LastCalculated { get; set; }
        public DateTime LastUpdated { get; set; }

        public List<QuotesModel> Quotes
        {
            get
            {
                try
                {
                    return JsonConvert.DeserializeObject<List<QuotesModel>>(QuotesJson);
                }
                catch (Exception)
                {
                    
                    return new List<QuotesModel>();
                }
            }
        }

        public string QuotesJson { get; set; }
    }
}