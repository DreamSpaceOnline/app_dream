using System.Web.Mvc;

namespace Dream.Space.Controllers
{
    public class HealthController : Controller
    {
        // GET: Health
        public ActionResult Check()
        {
            return Content("OK");
        }
    }
}