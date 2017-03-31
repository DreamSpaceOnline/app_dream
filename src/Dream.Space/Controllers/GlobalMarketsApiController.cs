using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Dream.Space.Data.Entities.Jobs;
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

        [HttpPost]
        [Route("job/register/refresh-stocks/{index?}")]
        public async Task<IHttpActionResult> RegisterRefreshStocksJob(string index = null)
        {
            if (string.IsNullOrWhiteSpace(index))
            {
                await _service.RefreshAllStocksAsync();
            }
            else
            {
                await _service.RefreshSP500StocksAsync();
            }
            

            return Ok();
        }

        [HttpPost]
        [Route("job/register/calculate-global-indexes")]
        public async Task<IHttpActionResult> RegisterRecalculateIndexesJob()
        {
            await _service.RecalculateGlobalIndexesAsync();


            return Ok();
        }

        [HttpPut]
        [Route("job/cancel/{jobId:int}")]
        public async Task<IHttpActionResult> CancelScheduledJob(int jobId)
        {
            await _service.CancelScheduledJobAsync(jobId);


            return Ok();
        }

        [HttpPut]
        [Route("job/pause/{jobId:int}")]
        public async Task<IHttpActionResult> PauseScheduledJob(int jobId)
        {
            await _service.PauseScheduledJobAsync(jobId);


            return Ok();
        }

        [HttpPut]
        [Route("job/resume/{jobId:int}")]
        public async Task<IHttpActionResult> ResumeScheduledJob(int jobId)
        {
            await _service.ResumeScheduledJobAsync(jobId);

            return Ok();
        }

        [HttpDelete]
        [Route("jobs/history/clear")]
        public async Task<IHttpActionResult> ClearJobsHistory()
        {
            await _service.ClearJobsHistoryAsync();

            return Ok();
        }


        [HttpGet]
        [Route("jobs/active/progress")]
        [ResponseType(typeof(IList<ScheduledJob>))]
        public async Task<IHttpActionResult> GetSheduledJobsProgress()
        {
            var jobs = await _service.GetActiveJobsProgressAsync();

            return Ok(jobs);
        }

        [HttpGet]
        [Route("jobs/history/job-type/{jobType}")]
        [ResponseType(typeof(IList<ScheduledJob>))]
        public async Task<IHttpActionResult> GetSheduledJobHistory(string jobType)
        {
            var jobs = await _service.GetJobHistoryAsync(jobType);

            return Ok(jobs);
        }

        [HttpGet]
        [Route("jobs/history/all")]
        [ResponseType(typeof(IList<ScheduledJob>))]
        public async Task<IHttpActionResult> GetSheduledJobHistory()
        {
            var jobs = await _service.GetJobHistoryAsync();

            return Ok(jobs);
        }
    }
}
