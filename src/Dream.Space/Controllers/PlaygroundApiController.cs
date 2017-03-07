using System;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Dream.Space.Data.Extensions;
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
        [Route("{ticker}/{strategyId:int:min(1)}/{bars:int}/{date:int}")]
        public async Task<IHttpActionResult> LoadPlayground(string ticker, int strategyId, int bars, int date = 0)
        {
            var request = new LoadPlaygroundRequest(ticker, strategyId, true);
            var playground = await _playgroundService.LoadPlaygroundAsync(request);

            var startDate = DateTime.MinValue;
            if(date > 19000101 && date <= DateTime.Today.ToInt())
            {
                startDate = date.ToDate();
            }

            playground.Initialize(startDate, bars);
            var response = playground.Current();

            return Ok(response);
        }


        [HttpGet]
        [ResponseType(typeof(CompanyChartData))]
        [Route("{ticker}/{strategyId:int:min(1)}/next")]
        public IHttpActionResult Next(string ticker, int strategyId)
        {
            var playground = _playgroundService.LoadPlaygroundFromCache(ticker, strategyId);
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
        [Route("{ticker}/{strategyId:int:min(1)}/prev")]
        public IHttpActionResult Prev(string ticker, int strategyId)
        {
            var playground = _playgroundService.LoadPlaygroundFromCache(ticker, strategyId);
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
