using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Enums;
using Dream.Space.Data.Models;
using Dream.Space.Data.Services;

namespace Dream.Space.Controllers
{
    [RoutePrefix("api/indicator")]
    public class IndicatorsApiController : ApiController
    {
        private readonly IIndicatorService _indicatorService;

        public IndicatorsApiController(IIndicatorService indicatorService)
        {
            _indicatorService = indicatorService;
        }

        [HttpGet]
        [Route("{id:int:min(1)}")]
        [ResponseType(typeof(Indicator))]
        public async Task<IHttpActionResult> GetIndicator(int id)
        {
            var indicator = await _indicatorService.GetIndicatorAsync(id);

            return Ok(indicator);
        }

        [HttpGet]
        [Route("{period:int}/all")]
        [ResponseType(typeof(List<Indicator>))]
        public async Task<IHttpActionResult> GetIndicators(int period)
        {
            var indicators = await _indicatorService.GetIndicatorsAsync((QuotePeriod)period);

            return Ok(indicators);
        }

        [HttpGet]
        [Route("all")]
        [ResponseType(typeof(List<IndicatorCore>))]
        public async Task<IHttpActionResult> GetIndicators()
        {
            var indicators = await _indicatorService.GetIndicatorsAsync();

            return Ok(indicators);
        }

        [HttpPost]
        [Route("")]
        [ResponseType(typeof(Indicator))]
        public async Task<IHttpActionResult> SaveIndicator([FromBody] Indicator model)
        {

            var indicator = await _indicatorService.SaveIndicatorAsync(model);

            return Ok(indicator);
        }

        [HttpDelete]
        [Route("{id:int:min(1)}")]
        public async Task<IHttpActionResult> DeleteIndicator(int id)
        {
            await _indicatorService.DeleteIndicatorAsync(id);
            return Ok();
        }

    }
}
