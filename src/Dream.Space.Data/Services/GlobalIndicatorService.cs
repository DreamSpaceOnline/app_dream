using System;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Repositories;

namespace Dream.Space.Data.Services
{
    public interface IGlobalIndicatorService
    {
        Task<GlobalIndicator> Save(GlobalIndicator indicator);
        Task<GlobalIndicator> GetAsync(int sectorId, int indicatorId);
    }

    public class GlobalIndicatorService : IGlobalIndicatorService
    {
        private readonly ILifetimeScope _container;

        public GlobalIndicatorService(ILifetimeScope container)
        {
            _container = container;
        }

        public async Task<GlobalIndicator> Save(GlobalIndicator indicator)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IGlobalIndicatorRepository>();
                var record = await repository.GetAsync(indicator.SectorId, indicator.IndicatorId);
                if (record == null)
                {
                    record = repository.Add(new GlobalIndicator());
                    record.SectorId = indicator.SectorId;
                    record.IndicatorId = indicator.IndicatorId;
                }

                record.CalculatedError = indicator.CalculatedError;
                record.CalculatedSuccessful = indicator.CalculatedSuccessful;
                record.CompanyCount = indicator.CompanyCount;
                record.StartDate = indicator.StartDate;
                record.EndDate = indicator.EndDate;
                record.LastCalculated = DateTime.UtcNow;
                record.ValuesJson = indicator.ValuesJson;

                await repository.CommitAsync();

                return record;
            }
        }

        public async Task<GlobalIndicator> GetAsync(int sectorId, int indicatorId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IGlobalIndicatorRepository>();
                var indicator = await repository.GetAsync(sectorId, indicatorId);
                return indicator;
            }
        }

    }
}
