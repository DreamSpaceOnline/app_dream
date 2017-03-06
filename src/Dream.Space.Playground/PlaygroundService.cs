using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Cache;
using Dream.Space.Calculators.IndicatorProcessor;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Entities.Strategies;
using Dream.Space.Data.Extensions;
using Dream.Space.Data.Repositories;
using Dream.Space.Data.Requests;
using Dream.Space.Data.Services;
using Dream.Space.Playground.Models;
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
            var ticker = playground.Company.Ticker;

            var key = $"LoadPlaygroundAsync-{ticker}";
            _cache.Set(key, playground);
        }


        public PlaygroundProcessor LoadPlaygroundFromCache(string ticker)
        {
            var key = $"LoadPlaygroundAsync-{ticker}";
            return _cache.Get<PlaygroundProcessor>(key);
        }


        public async Task<PlaygroundProcessor> LoadPlaygroundAsync(string ticker, int strategyId, bool refreshCache)
        {
            var key = $"LoadPlaygroundAsync-{ticker}";

            if (refreshCache)
            {
                _cache.Delete(key);    
            }

            var processor = await _cache.Get(key, async () => await LoadPlayground(ticker, strategyId));
            if (processor.Quotes.Count < 300)
            {
                var historicalData = await LoadHistoryAsync(ticker);
                if (historicalData.Count > 300)
                {
                    using (var scope = _container.BeginLifetimeScope())
                    {
                        var companyService = scope.Resolve<ICompanyService>();
                        companyService.UpdateQuotes(new UpdateQuotesRequest(ticker, historicalData));
                    }

                    return await LoadPlaygroundAsync(ticker, strategyId, true);
                }
            }

            return processor;
        }

        private async Task<PlaygroundProcessor> LoadPlayground(string ticker, int strategyId)
        {
            var indicators = await LoadIndicatorsAsync(strategyId);

            using (var scope = _container.BeginLifetimeScope())
            {
                var indicatorProcessorFactory = scope.Resolve<IndicatorProcessorFactory>();
                //var strategyRules = scope.Resolve<IVStrategyRuleRepository>();
                var companyRepository = scope.Resolve<ICompanyRepository>();

                //var rules = await strategyRules.GetRulesAsync(strategyId);
                var company = companyRepository.Get(ticker);

                return new PlaygroundProcessor(
                    new CompanyInfo {Ticker = company.Ticker, Name = company.Name}, 
                    company.HistoryQuotes, indicators, indicatorProcessorFactory, 100);
            }
        }

    }
}