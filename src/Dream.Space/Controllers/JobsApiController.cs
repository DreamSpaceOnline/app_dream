using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Dream.Space.Data.Entities.Jobs;
using Dream.Space.Data.Services;

namespace Dream.Space.Controllers
{
    [RoutePrefix("api/job")]
    public class JobsApiController : ApiController
    {
        private readonly IJobService _service;

        public JobsApiController(IJobService service)
        {
            _service = service;
        }


        [HttpPut]
        [Route("cancel/{jobId:int}")]
        public async Task<IHttpActionResult> CancelScheduledJob(int jobId)
        {
            await _service.CancelScheduledJobAsync(jobId);


            return Ok();
        }

        [HttpPut]
        [Route("pause/{jobId:int}")]
        public async Task<IHttpActionResult> PauseScheduledJob(int jobId)
        {
            await _service.PauseScheduledJobAsync(jobId);


            return Ok();
        }

        [HttpPut]
        [Route("resume/{jobId:int}")]
        public async Task<IHttpActionResult> ResumeScheduledJob(int jobId)
        {
            await _service.ResumeScheduledJobAsync(jobId);

            return Ok();
        }

        [HttpDelete]
        [Route("history/clear/{jobType:int}")]
        public async Task<IHttpActionResult> ClearJobsHistory(int jobType)
        {
            await _service.ClearJobsHistoryAsync();

            return Ok();
        }


        [HttpPost]
        [Route("start/{jobType:int}")]
        [ResponseType(typeof(ScheduledJob))]
        public async Task<IHttpActionResult> StartScheduledJobs(int jobType)
        {
            var job = await _service.StartScheduledJobAsync((ScheduledJobType) jobType);

            return Ok(job);
        }

        [HttpGet]
        [Route("history/{jobType:int}")]
        [ResponseType(typeof(IList<ScheduledJob>))]
        public async Task<IHttpActionResult> GetSheduledJobHistory(int jobType)
        {
            var jobs = await _service.GetJobHistoryAsync((ScheduledJobType)jobType);

            return Ok(jobs);
        }

        [HttpGet]
        [Route("current/{jobType:int}")]
        [ResponseType(typeof(ScheduledJob))]
        public async Task<IHttpActionResult> GetCurrentJob(int jobType)
        {
            var job = await _service.GetCurrentJobAsync((ScheduledJobType) jobType);

            return Ok(job);
        }

    }
}
