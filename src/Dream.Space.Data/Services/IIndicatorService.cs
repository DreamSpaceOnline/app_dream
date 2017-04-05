using System;
using System.Collections.Generic;
using System.Linq;
using System.Resources;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Repositories;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Indicators;

namespace Dream.Space.Data.Services
{
    public interface IIndicatorService
    {
        Task<Indicator> GetIndicatorAsync(int id);
        Task<List<Indicator>> GetIndicatorsAsync(QuotePeriod period);
        Task<Indicator> SaveIndicatorAsync(Indicator model);
        Task DeleteIndicatorAsync(int id);
        Task<List<IndicatorCore>> GetIndicatorsAsync();
        List<Indicator> GetGlobalIndicators();
        Task<List<IndicatorResult>> GetIntermediateResultsAsync(int jobId, int indicatorId);
        Task StoreIntermediateResultsAsync(int jobId, int indicatorId, List<IndicatorResult> results);
        Task ClearIntermediateResultsAsync(int jobId, int indicatorId);
    }

    public class IndicatorService : IIndicatorService
    {
        private readonly ILifetimeScope _container;

        public IndicatorService(ILifetimeScope container)
        {
            _container = container;
        }


        public async Task<Indicator> GetIndicatorAsync(int id)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IIndicatorRepository>();
                var entity = await repository.GetAsync(id);
                return entity;
            }
        }

        public async Task DeleteIndicatorAsync(int id)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IIndicatorRepository>();
                var record = await repository.GetAsync(id);
                if (record != null)
                {
                    record.Deleted = true;
                    await repository.CommitAsync();
                }
            }
        }

        public async Task<List<Indicator>> GetIndicatorsAsync(QuotePeriod period)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IIndicatorRepository>();
                var entities = await repository.GetAllAsync(period);
                return entities;
            }
        }

        public async Task<Indicator> SaveIndicatorAsync(Indicator indicator)
        {
            if (indicator == null) return null;

            using (var scope = _container.BeginLifetimeScope())
            {
                Indicator record;
                var repository = scope.Resolve<IIndicatorRepository>();

                if (indicator.IndicatorId == 0)
                {
                    record = repository.Add(new Indicator());
                }
                else
                {
                    record = await repository.GetAsync(indicator.IndicatorId);
                }

                if (record != null)
                {
                    record.Name = indicator.Name;
                    record.Description = indicator.Description;
                    record.Deleted = indicator.Deleted;
                    record.Period = indicator.Period;
                    record.LastUpdated = DateTime.UtcNow;
                    record.ChartColor = indicator.ChartColor;
                    record.ChartPlotNumber = indicator.ChartPlotNumber;
                    record.ChartType = indicator.ChartType;
                    record.Params = indicator.Params;

                    await repository.CommitAsync();
                }

                return record;
            }
        }

        public async Task<List<IndicatorCore>> GetIndicatorsAsync()
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IIndicatorRepository>();
                var entities = await repository.GetAllAsync();
                var result = entities.Select(e => new IndicatorCore(e)).OrderBy(e => e.Name).ToList();

                return result;
            }
        }

        public List<Indicator> GetGlobalIndicators()
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IIndicatorRepository>();
                var result = repository.GetGlobalAll();

                return result;
            }
        }

        public async Task<List<IndicatorResult>> GetIntermediateResultsAsync(int jobId, int indicatorId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IIndicatorIntermediateResultsRepository>();
                var result = await repository.GetIntermediateResultsAsync(jobId, indicatorId);
                if (result != null)
                {
                    return result.Values;
                }
                return new List<IndicatorResult>();
            }
        }

        public async Task StoreIntermediateResultsAsync(int jobId, int indicatorId, List<IndicatorResult> results)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IIndicatorIntermediateResultsRepository>();
                repository.Add(new IndicatorIntermediateResult
                {
                    JobId = jobId,
                    IndicatorId = indicatorId,
                    Values = results
                });

                await repository.CommitAsync();
            }
        }

        public async Task ClearIntermediateResultsAsync(int jobId, int indicatorId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IIndicatorIntermediateResultsRepository>();

                var entity = await repository.GetIntermediateResultsAsync(jobId, indicatorId);
                if (entity != null && entity.JobId == jobId)
                {
                    repository.Delete(entity);
                }
            }
        }
    }
}
