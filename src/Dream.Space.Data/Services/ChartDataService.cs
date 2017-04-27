using System.Threading.Tasks;
using Dream.Space.Data.Requests;
using Dream.Space.Models.Charts;
using Dream.Space.Models.Playgrounds;

namespace Dream.Space.Data.Services
{
    public interface IChartDataService
    {
        Task<GlobalIndexChartData> GetChartDataAsync(GetChartDataRequest request);
    }

    public class ChartDataService : IChartDataService
    {
        private readonly ICompanyService _companyService;
        private readonly ILayoutService _layoutService;

        public ChartDataService(ICompanyService companyService, ILayoutService layoutService)
        {
            _companyService = companyService;
            _layoutService = layoutService;
        }


        public async Task<GlobalIndexChartData> GetChartDataAsync(GetChartDataRequest request)
        {
            var result = new GlobalIndexChartData();

            var company = _companyService.Get(request.Ticker);
            var layout = await _layoutService.GetAsync(request.Layout);


            return result;
        }
    }
}