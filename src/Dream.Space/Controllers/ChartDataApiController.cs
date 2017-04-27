using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Dream.Space.Data.Requests;
using Dream.Space.Data.Services;
using Dream.Space.Models.Playgrounds;

namespace Dream.Space.Controllers
{
    [RoutePrefix("api/chart-data")]
    public class ChartDataApiController : ApiController
    {
        private readonly IChartDataService _service;

        public ChartDataApiController(IChartDataService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("{ticker}/layout-{layout:int}")]
        [ResponseType(typeof(GlobalIndexChartData))]
        public async Task<IHttpActionResult> GetChartData(string ticker, int layout)
        {
            GlobalIndexChartData data = await _service.GetChartDataAsync(new GetChartDataRequest {Ticker = ticker, Layout = layout});

            return Ok(data);
        }
    }
}
