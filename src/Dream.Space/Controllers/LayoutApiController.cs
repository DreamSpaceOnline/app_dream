using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Dream.Space.Data.Services;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Layourts;

namespace Dream.Space.Controllers
{
    [RoutePrefix("api/layout")]
    public class LayoutApiController : ApiController
    {
        private readonly IChartLayoutService _service;

        public LayoutApiController(IChartLayoutService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("period/{period:int}")]
        [ResponseType(typeof(IList<ChartLayoutModel>))]
        public async Task<IHttpActionResult> GetLayoutsForPeriod(int period)
        {
            var layouts = await _service.GetLayoutsForPeriodAsync((QuotePeriod) period);

            return Ok(layouts);
        }

        [HttpGet]
        [Route("{layoutId:int}")]
        [ResponseType(typeof(ChartLayoutModel))]
        public async Task<IHttpActionResult> GetLayout(int layoutId)
        {
            var layout = await _service.GetLayoutAsync(layoutId);

            return Ok(layout);
        }

        [HttpGet]
        [Route("period/{period:int}/default")]
        [ResponseType(typeof(ChartLayoutModel))]
        public async Task<IHttpActionResult> GetDefaultLayout(int period)
        {
            var layout = await _service.GetDefaultLayoutAsync((QuotePeriod) period);

            return Ok(layout);
        }

        [HttpPost]
        [Route("")]
        [ResponseType(typeof(ChartLayoutModel))]
        public async Task<IHttpActionResult> SaveLayout([FromBody] ChartLayoutModel model)
        {
            await _service.SaveLayoutAsync(model);

            return Ok(model);
        }

    }
}
