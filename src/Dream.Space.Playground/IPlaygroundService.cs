using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Entities.Strategies;
using Dream.Space.Models.Quotes;

namespace Dream.Space.Playground
{
    public interface IPlaygroundService
    {
        Task<List<QuotesModel>> LoadHistoryAsync(string ticker);
        Task<List<Indicator>> LoadIndicatorsAsync(int strategyId);
        Task<PlaygroundProcessor> LoadPlaygroundAsync(LoadPlaygroundRequest request);
        PlaygroundProcessor LoadPlaygroundFromCache(string ticker, int strategyId);
        Task<List<vStrategyRule>> LoadStrategyRulesAsync(int strategyId);
        void UpdatePlayground(PlaygroundProcessor playground);
    }
}