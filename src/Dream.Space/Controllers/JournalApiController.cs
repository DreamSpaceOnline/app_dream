using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Dream.Space.Data.Services;
using Dream.Space.Models.Journals;

namespace Dream.Space.Controllers
{
    [RoutePrefix("api/journal")]
    public class JournalApiController : ApiController
    {
        private readonly IJournalService _service;

        public JournalApiController(IJournalService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("{id:int}")]
        [ResponseType(typeof(JournalModel))]
        public async Task<IHttpActionResult> GetJournal(int id)
        {
            var journal = await _service.GetJournalAsync(id);

            return Ok(journal);
        }
    }
}
