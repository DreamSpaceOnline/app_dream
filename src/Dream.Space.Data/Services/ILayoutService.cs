using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Models.Charts;
using Dream.Space.Models.Indicators;

namespace Dream.Space.Data.Services
{
    public interface ILayoutService
    {
        Task<ChartLayout> GetAsync(int id);
    }

    public class LayoutService : ILayoutService
    {
        private readonly IIndicatorService _indicatorService;

        public LayoutService(IIndicatorService indicatorService)
        {
            _indicatorService = indicatorService;
        }

        public async Task<ChartLayout> GetAsync(int id)
        {
            IList<IIndicatorEntity> indicators = await _indicatorService.GetLayoutIndicatorsAsync(id);
            return new ChartLayout();
        }
    }
}
