using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Models.Quotes;
using Dream.Space.Models.Strategies.Rules;

namespace Dream.Space.Playground
{
    public interface IPlaygroundService
    {
        Task<List<QuotesModel>> LoadHistoryAsync(string ticker);
        Task<List<Indicator>> LoadIndicatorsAsync(int strategyId);
        Task<PlaygroundProcessor> LoadPlaygroundAsync(LoadPlaygroundRequest request);
        PlaygroundProcessor LoadPlaygroundFromCache(string ticker, int strategyId);
        Task<List<IStrategyRuleView>> LoadStrategyRulesAsync(int strategyId);
        void UpdatePlayground(PlaygroundProcessor playground);
    }
}