using System.Web.Mvc;
using Dream.Space.Data.Enums;
using Dream.Space.Domain.ChartData;
using Dream.Space.Domain.ChartData.Requests;

namespace Dream.Space.Controllers
{
    public class ChartController : Controller
    {
        private readonly IChartDataService _chartDataService;

        public ChartController(IChartDataService chartDataService)
        {
            _chartDataService = chartDataService;
        }

        // GET: Chart
        public JsonResult GetChartData(string ticker)
        {
            var data = _chartDataService.GetChartData(new GetChartDataRequest()
            {
                Ticker = ticker,
                QuotePeriod = QuotePeriod.Daily
            });
            return Json(data, JsonRequestBehavior.AllowGet);
        }
    }
}