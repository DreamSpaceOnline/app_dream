using Dream.Space.Data.Entities.Logs;
using Dream.Space.Data.Services;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace Dream.Space.Controllers
{
    [RoutePrefix("api/logs")]
    public class LogsApiController : ApiController
    {
        private readonly IProcessorLogService _logService;

        public LogsApiController(IProcessorLogService logService)
        {
            _logService = logService;
        }

        [HttpGet]
        [Route("job/{jobId:int}")]
        [ResponseType(typeof(IList<ProcessorLog>))]
        public async Task<IHttpActionResult> GetJobLogs(int jobId)
        {
            var jobs = await _logService.GetAllAsync(jobId);

            return Ok(jobs);
        }

        [HttpDelete]
        [Route("job/delete/{jobId:int}")]
        public async Task<IHttpActionResult> DeleteJobLogs(int jobId)
        {
            await _logService.DeleteAllAsync(jobId);

            return Ok();
        }

        [HttpDelete]
        [Route("job-type/delete/{jobType:int}")]
        public async Task<IHttpActionResult> DeleteAllLogs(int jobType)
        {
            await _logService.DeleteAllAsync(jobType);

            return Ok();
        }
    }
}
