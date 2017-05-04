using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data.Repositories;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Layourts;

namespace Dream.Space.Data.Services
{
    public interface IChartLayoutService
    {
        Task<ChartLayoutModel> GetDefaultLayoutAsync(QuotePeriod period);
        Task<IList<ChartLayoutModel>> GetLayoutsForPeriodAsync(QuotePeriod period);
        Task<ChartLayoutModel> GetLayoutAsync(int layoutId);
    }

    public class ChartLayoutService : IChartLayoutService
    {
        private readonly ILifetimeScope _container;

        public ChartLayoutService(ILifetimeScope container)
        {
            _container = container;
        }

        public async Task<IList<ChartLayoutModel>> GetLayoutsForPeriodAsync(QuotePeriod period)
        {
            var result = new List<ChartLayoutModel>();
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IChartLayoutRepository>();
                var layouts = await repository.GetForPeriodAsync(period);

                if (layouts == null || !layouts.Any())
                {
                    return result;
                }

                result.AddRange(layouts.Select(layout => new ChartLayoutModel
                {
                    LayoutId = layout.LayoutId,
                    Deleted = layout.Deleted,
                    Title = layout.Title,
                    Period = layout.Period,
                    Default = layout.Default
                }));

                var indicatorRepository = scope.Resolve<IIndicatorRepository>();
                var layoutRepository = scope.Resolve<ILayoutIndicatorRepository>();
                var indicators = await indicatorRepository.GetLayoutIndicatorsForPeriodAsync(period);
                var layoutIndicators = await layoutRepository.GetForPeriodAsync(period);

                foreach (var layout in result)
                {
                    layout.Indicators = indicators
                        .Where(ind => layoutIndicators
                            .Any(l => l.IndicatorId == ind.IndicatorId)).ToList();
                }
            }

            return result;
        }

        public async Task<ChartLayoutModel> GetDefaultLayoutAsync(QuotePeriod period)
        {
            var result = new ChartLayoutModel();

            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IChartLayoutRepository>();
                var layout = await repository.GetDefaultAsync(period);

                if (layout == null)
                {
                    return result;
                }

                result.LayoutId = layout.LayoutId;
                result.Deleted = layout.Deleted;
                result.Title = layout.Title;

                var indicatorRepository = scope.Resolve<IIndicatorRepository>();
                var indicators = await indicatorRepository.GetLayoutIndicatorsAsync(result.LayoutId);

                result.Indicators = indicators;
            }

            return result;
        }

        public async Task<ChartLayoutModel> GetLayoutAsync(int layoutId)
        {
            var result = new ChartLayoutModel();

            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IChartLayoutRepository>();
                var layout = await repository.GetAsync(layoutId);

                if (layout == null)
                {
                    return result;
                }

                result.LayoutId = layout.LayoutId;
                result.Deleted = layout.Deleted;
                result.Title = layout.Title;

                var indicatorRepository = scope.Resolve<IIndicatorRepository>();
                var indicators = await indicatorRepository.GetLayoutIndicatorsAsync(result.LayoutId);

                result.Indicators = indicators;
            }

            return result;
        }
    }
}
