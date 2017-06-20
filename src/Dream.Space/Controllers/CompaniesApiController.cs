using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Dream.Space.Data.Entities.Companies;
using Dream.Space.Data.Models;
using Dream.Space.Data.Requests;
using Dream.Space.Data.Services;
using Dream.Space.Models.Companies;

namespace Dream.Space.Controllers
{
    [RoutePrefix("api/company")]
    public class CompaniesApiController : ApiController
    {
        private readonly ICompanyService _service;

        public CompaniesApiController(ICompanyService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("{ticker}")]
        [ResponseType(typeof(CompanyModel))]
        public async Task<IHttpActionResult> GetCompany(string ticker)
        {
            var company = await _service.GetAsync(ticker);

            return Ok(company);
        }

        [HttpPost]
        [Route("search")]
        [ResponseType(typeof(List<CompanyHeader>))]
        public async Task<IHttpActionResult> Search([FromBody] CompanySearchRequest request)
        {
            var rules = await _service.SearchAsync(request);

            return Ok(rules);
        }

    }
}
