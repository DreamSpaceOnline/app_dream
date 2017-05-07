using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data.Repositories;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Layourts;
using Dream.Space.Data.Entities.Layouts;

namespace Dream.Space.Data.Services
{
    public interface IChartLayoutService
    {
        Task<ChartLayoutModel> GetDefaultLayoutAsync(QuotePeriod period);
        Task<IList<ChartLayoutModel>> GetLayoutsForPeriodAsync(QuotePeriod period);
        Task<ChartLayoutModel> GetLayoutAsync(int layoutId);
        Task SaveLayoutAsync(ChartLayoutModel model);
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
                    Default = layout.Default,
                    Description = layout.Description
                }));

                var indicatorRepository = scope.Resolve<IIndicatorRepository>();
                var layoutRepository = scope.Resolve<ILayoutIndicatorRepository>();
                var indicators = await indicatorRepository.GetLayoutIndicatorsForPeriodAsync(period);
                var layoutIndicators = await layoutRepository.GetForPeriodAsync(period);

                foreach (var layout in result)
                {
                    var li = layoutIndicators
                        .Where(l => l.LayoutId == layout.LayoutId)
                        .Join(indicators,
                            l => l.IndicatorId,
                            i => i.IndicatorId,
                            (l, i) => new LayoutIndicatorModel()
                            {
                                Id = l.Id,
                                Indicator = new IndicatorModel(i),
                                IndicatorId = l.IndicatorId,
                                LayoutId = l.LayoutId,
                                Name = i.Description,
                                OrderId = l.OrderId,
                                LineColor = l.LineColor
                            } 
                        );

                    layout.Indicators = li.OrderBy(i => i.OrderId).ToList();
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
                result.Period = layout.Period;
                result.Default = layout.Default;
                result.Description = layout.Description;

                var indicatorRepository = scope.Resolve<IIndicatorRepository>();
                var indicators = await indicatorRepository.GetLayoutIndicatorsAsync(result.LayoutId);

                var layoutRepository = scope.Resolve<ILayoutIndicatorRepository>();
                var layoutIndicators = await layoutRepository.GetForLayoutAsync(layout.LayoutId);

                var li = layoutIndicators
                        .Join(indicators,
                            l => l.IndicatorId,
                            i => i.IndicatorId,
                            (l, i) => new LayoutIndicatorModel()
                            {
                                Id = l.Id,
                                Indicator = new IndicatorModel(i),
                                IndicatorId = l.IndicatorId,
                                LayoutId = l.LayoutId,
                                Name = i.Description,
                                OrderId = l.OrderId,
                                LineColor = l.LineColor
                            }
                        );

                result.Indicators = li.OrderBy(i => i.OrderId).ToList();
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
                result.Period = layout.Period;
                result.Default = layout.Default;
                result.Description = layout.Description;

                var indicatorRepository = scope.Resolve<IIndicatorRepository>();
                var indicators = await indicatorRepository.GetLayoutIndicatorsAsync(result.LayoutId);

                var layoutRepository = scope.Resolve<ILayoutIndicatorRepository>();
                var layoutIndicators = await layoutRepository.GetForLayoutAsync(layoutId);

                var li = layoutIndicators
                        .Join(indicators,
                            l => l.IndicatorId,
                            i => i.IndicatorId,
                            (l, i) => new LayoutIndicatorModel()
                            {
                                Id = l.Id,
                                Indicator = new IndicatorModel(i),
                                IndicatorId = l.IndicatorId,
                                LayoutId = l.LayoutId,
                                Name = i.Description,
                                OrderId = l.OrderId,
                                LineColor = l.LineColor
                            }
                        );

                result.Indicators = li.OrderBy(i => i.OrderId).ToList();
            }

            return result;
        }

        public async Task SaveLayoutAsync(ChartLayoutModel model)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IChartLayoutRepository>();
                IChartLayoutEntity layout = null;

                if (model.LayoutId > 0)
                {
                    layout = await repository.GetAsync(model.LayoutId);
                } else
                {
                    layout = repository.Add(new ChartLayout());
                }

                if(layout != null)
                {
                    layout.Title = model.Title;
                    layout.Description = model.Description;
                    layout.Period = model.Period;

                    repository.Commit();
        
                    if(model.LayoutId == 0)
                    {
                        model.LayoutId = layout.LayoutId;
                    }

                    if (model.Indicators.Any())
                    {
                        var indicatorRepository = scope.Resolve<ILayoutIndicatorRepository>();
                        foreach (var indicator in model.Indicators)
                        {
                            var entity = await indicatorRepository.GetAsync(model.LayoutId, indicator.IndicatorId);
                            if(entity == null)
                            {
                                entity = indicatorRepository.Add(new LayoutIndicator {
                                    IndicatorId = indicator.IndicatorId,
                                    LayoutId = model.LayoutId
                                });
                            }
                            entity.OrderId = model.Indicators.IndexOf(indicator);
                            entity.LineColor = indicator.LineColor;

                            indicatorRepository.Commit();
                        }
                    }
                }
            }
        }
    }
}
