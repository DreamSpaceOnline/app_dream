using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Dream.Space.Data.Extensions;
using Dream.Space.Data.Requests;
using Dream.Space.Data.Services;
using Dream.Space.Models.Companies;
using Dream.Space.Models.Quotes;
using Dream.Space.Reader;
using Dream.Space.Stock;
using Dream.Space.Stock.Requests;

namespace Dream.Space.Controllers
{

    [RoutePrefix("api/stock")]
    public class StockApiController : ApiController
    {
        private readonly IMarketStockClient _stockClient;
        private readonly ICompanyService _companyService;
        private readonly IQuotesFileReader _fileReader;

        public StockApiController(IMarketStockClient stockClient, ICompanyService companyService, IQuotesFileReader fileReader)
        {
            _stockClient = stockClient;
            _companyService = companyService;
            _fileReader = fileReader;
        }


        [HttpPut]
        [Route("{ticker}/update-quotes")]
        public async Task<IHttpActionResult> UpdateQuotes(string ticker)
        {
            var company = await _companyService.GetAsync(ticker);

            if (company != null)
            {
                var update = new CompanyQuotesModel
                {
                    Ticker = company.Ticker,
                    LastUpdated = company.LastUpdated,
                    HistoryQuotes = _companyService.GetQuotes(ticker)
                };

                if (!update.HistoryQuotes.Any())
                {
                    update.LastUpdated = DateTime.Today.AddYears(-5);
                }

                var request = new GetStockHistoryRequest(update.Ticker, update.LastUpdated);

                var csvQuotes = await _stockClient.GetStockHistory(request);
                var quotes = _fileReader.Read(csvQuotes);
                if (quotes.Any())
                {
                    var qmodels = quotes.Select(q => new QuotesModel(q)).ToList();
                    qmodels = qmodels.Merge(update.HistoryQuotes).Where(q => q.Date > DateTime.Today.AddYears(-1)).ToList();
                    _companyService.UpdateQuotes(new UpdateQuotesRequest(company.Ticker, qmodels));
                }
            }

            return Ok();
        }
    }
}
