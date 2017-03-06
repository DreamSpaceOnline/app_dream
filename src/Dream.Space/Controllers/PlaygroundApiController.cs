using System;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Dream.Space.Playground;
using Dream.Space.Playground.Models;

namespace Dream.Space.Controllers
{
    [RoutePrefix("api/playground")]
    public class PlaygroundApiController : ApiController
    {
        private readonly IPlaygroundService _playgroundService;

        public PlaygroundApiController(IPlaygroundService playgroundService)
        {
            _playgroundService = playgroundService;
        }

        [HttpGet]
        [ResponseType(typeof(CompanyChartData))]
        [Route("{ticker}/{strategyId:int:min(1)}/{bars:int}")]
        public async Task<IHttpActionResult> LoadPlayground(string ticker, int strategyId, int bars)
        {
            var playground = await _playgroundService.LoadPlaygroundAsync(ticker, strategyId, true);
            playground.Initialize(null);
            var response = playground.Reset();

            return Ok(response);
        }


        [HttpGet]
        [ResponseType(typeof(CompanyChartData))]
        [Route("{ticker}/{strategyId:int:min(1)}/{bars:int}/next/{step:int:min(1)}")]
        public IHttpActionResult Next(string ticker, int strategyId, int bars, int step)
        {
            var playground = _playgroundService.LoadPlaygroundFromCache(ticker);
            if (playground != null)
            {
                var response = playground.MoveNext();
                _playgroundService.UpdatePlayground(playground);
                return Ok(response);
            }

            return NotFound();

        }

        [HttpGet]
        [ResponseType(typeof(CompanyChartData))]
        [Route("{ticker}/{strategyId:int:min(1)}/{bars:int}/prev/{step:int:min(1)}")]
        public IHttpActionResult Prev(string ticker, int strategyId, int bars, int step)
        {
            var playground = _playgroundService.LoadPlaygroundFromCache(ticker);
            if (playground != null)
            {
                var response = playground.MovePrev();
                _playgroundService.UpdatePlayground(playground);
                return Ok(response);
            }

            return NotFound();
        }

    }
}
