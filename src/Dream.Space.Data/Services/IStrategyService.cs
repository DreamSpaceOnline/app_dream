using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Strategies;
using Dream.Space.Data.Models;
using Dream.Space.Models.Strategies;

namespace Dream.Space.Data.Services
{
    public interface IStrategyService
    {
        Task<List<StrategySummary>> GetStrategiesAsync();
        Task<StrategyModel> GetStrategyByUrlAsync(string url);
        Task<StrategyModel> SaveStrategyAsync(StrategyModel model);
        Task<Strategy> GetStrategyAsync(int id);
        Task DeleteStrategyAsync(int id);
        Task<StrategySummary> GetSummaryByUrlAsync(string url);
    }
}