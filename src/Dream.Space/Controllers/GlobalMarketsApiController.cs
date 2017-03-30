using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Dream.Space.Data.Entities.Companies;
using Dream.Space.Data.Services;

namespace Dream.Space.Controllers
{
    [RoutePrefix("api/global-markets")]
    public class GlobalMarketsApiController : ApiController
    {
        private readonly IGlobalMarketsService _service;

        public GlobalMarketsApiController(IGlobalMarketsService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("refresh/{index?}")]
        [ResponseType(typeof(Company))]
        public async Task<IHttpActionResult> RefreshMarkets(string index = null)
        {
            //var company = await _service.GetAsync(ticker);
            

            return Ok();
        }
    }
}
