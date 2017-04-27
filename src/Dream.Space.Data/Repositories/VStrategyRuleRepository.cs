using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Strategies;
using Dream.Space.Models.Strategies.Rules;

namespace Dream.Space.Data.Repositories
{
    public interface IVStrategyRuleRepository
    {
        Task<List<IStrategyRuleView>> GetRulesAsync(int strategyId);
    }


    public class VStrategyRuleRepository : DreamDbRepository<vStrategyRule>, IVStrategyRuleRepository
    {
        public VStrategyRuleRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<List<IStrategyRuleView>> GetRulesAsync(int strategyId)
        {
            var records = await Dbset.Where(r => r.StrategyId == strategyId).OrderBy(r => r.OrderId).ThenBy(r => r.RuleSetId).Select(r => r as IStrategyRuleView).ToListAsync();
            return records;
        }

    }
}