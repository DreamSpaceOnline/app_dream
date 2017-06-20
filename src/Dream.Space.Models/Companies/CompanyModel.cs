using System.Collections.Generic;
using Dream.Space.Models.Quotes;
using Newtonsoft.Json;

namespace Dream.Space.Models.Companies
{
    public class CompanyModel: CompanyHeader
    {
        public string SectorName { get; set; }
        public string IndustryName { get; set; }

        public List<QuotesModel> HistoryQuotes { get; set; }

        public CompanyModel()
        {
            HistoryQuotes = new List<QuotesModel>();
        }

        public CompanyModel(ICompanyEntity company): base(company)
        {
            HistoryQuotes = new List<QuotesModel>();
            if (!string.IsNullOrWhiteSpace(company.HistoryQuotesJson))
            {
                HistoryQuotes = JsonConvert.DeserializeObject<List<QuotesModel>>(company.HistoryQuotesJson);
            }
        }
    }
}
