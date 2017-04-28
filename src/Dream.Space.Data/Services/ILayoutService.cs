using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data.Repositories;
using Dream.Space.Models.Charts;

namespace Dream.Space.Data.Services
{
    public interface ILayoutService
    {
        Task<ChartLayoutModel> GetAsync(int id);
    }

    public class LayoutService : ILayoutService
    {
        private readonly IIndicatorService _indicatorService;
        private readonly ILifetimeScope _container;

        public LayoutService(IIndicatorService indicatorService, ILifetimeScope container)
        {
            _indicatorService = indicatorService;
            _container = container;
        }

        public async Task<ChartLayoutModel> GetAsync(int id)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IChartLayoutRepository>();
                var indicators = await _indicatorService.GetLayoutIndicatorsAsync(id);
                var layout = await repository.GetAsync(id);

                return new ChartLayoutModel
                {
                    LayoutId = layout.LayoutId,
                    Indicators = indicators,
                    Deleted = layout.Deleted,
                    Title = layout.Title
                };
            }

        }
    }
}
