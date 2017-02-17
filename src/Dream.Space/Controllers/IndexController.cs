using System.Web.Mvc;
using Dream.Space.Infrastructure.Settings;
using Dream.Space.Models;

namespace Dream.Space.Controllers
{
    public class IndexController : Controller
    {
        private readonly IAppSettings _appSettings;

        public IndexController(IAppSettings appSettings)
        {
            _appSettings = appSettings;
        }

        public ActionResult Index()
        {
            return PartialView("Index");
        }
    }
}