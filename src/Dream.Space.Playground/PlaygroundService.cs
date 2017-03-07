using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Cache;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Entities.Strategies;
using Dream.Space.Data.Repositories;
using Dream.Space.Data.Requests;
using Dream.Space.Data.Services;
using Dream.Space.Reader;
using Dream.Space.Reader.Models;
using Dream.Space.Stock;
using Dream.Space.Stock.Requests;

namespace Dream.Space.Playground
{
    public class PlaygroundService : IPlaygroundService
    {
        private readonly ILifetimeScope _container;
        private readonly IDataCache _cache;

        public PlaygroundService(ILifetimeScope container, IDataCache cache)
        {
            _container = container;
            _cache = cache;
        }

        public async Task<List<QuotesModel>> LoadHistoryAsync(string ticker)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var client = scope.Resolve<IMarketStockClient>();
                var reader = scope.Resolve<IQuotesFileReader>();

                var csvQuotes = await client.GetStockHistory(new GetStockHistoryRequest
                {
                    Ticker = ticker,
                    FromDate = DateTime.Today.AddYears(-5)
                });

                if(!string.IsNullOrEmpty(csvQuotes))
                {
                    var quotes = reader.Read(csvQuotes);
                    return quotes;
                }

                return new List<QuotesModel>();
            }
        }

        public async Task<List<Indicator>> LoadIndicatorsAsync(int strategyId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IIndicatorRepository>();
                var records = await repository.GetByStrategyIdAsync(strategyId);
                return records;
            }
        }

        public async Task<List<vStrategyRule>> LoadStrategyRulesAsync(int strategyId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IVStrategyRuleRepository>();
                var records = await repository.GetRulesAsync(strategyId);
                return records;
            }
        }

        public void UpdatePlayground(PlaygroundProcessor playground)
        {

            var key = $"LoadPlaygroundAsync-{playground.Ticker}-{playground.StrategyId}";
            _cache.Set(key, playground);
        }


        public PlaygroundProcessor LoadPlaygroundFromCache(string ticker, int strategyId)
        {
            var key = $"LoadPlaygroundAsync-{ticker}-{strategyId}";
            return _cache.Get<PlaygroundProcessor>(key);
        }


        public async Task<PlaygroundProcessor> LoadPlaygroundAsync(LoadPlaygroundRequest request)
        {
            var key = $"LoadPlaygroundAsync-{request.Ticker}-{request.StrategyId}";

            if (request.RefreshCache)
            {
                _cache.Delete(key);    
            }

            var processor = await _cache.Get(key, async () => await LoadPlayground(request));
            if (processor.QuotesCount < 300)
            {
                var historicalData = await LoadHistoryAsync(request.Ticker);
                if (historicalData.Count > 300)
                {
                    using (var scope = _container.BeginLifetimeScope())
                    {
                        var companyService = scope.Resolve<ICompanyService>();
                        companyService.UpdateQuotes(new UpdateQuotesRequest(request.Ticker, historicalData));
                    }

                    request.RefreshCache = true;
                    return await LoadPlaygroundAsync(request);
                }
            }

            return processor;
        }

        private async Task<PlaygroundProcessor> LoadPlayground(LoadPlaygroundRequest request)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var configurationLoader = scope.Resolve<PlaygroundConfigurationLoader>();
                var configuration = await configurationLoader.Load(request.Ticker, request.StrategyId);

                return new PlaygroundProcessor(configuration);
            }
        }

    }
}