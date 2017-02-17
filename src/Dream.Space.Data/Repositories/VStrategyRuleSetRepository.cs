using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Strategies;

namespace Dream.Space.Data.Repositories
{
    public interface IVStrategyRuleSetRepository
    {
        Task<List<vStrategyRuleSet>> GetRuleSetsAsync(int strategyId);
    }


    public class VStrategyRuleSetRepository : DreamDbRepository<vStrategyRuleSet>, IVStrategyRuleSetRepository
    {
        public VStrategyRuleSetRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<List<vStrategyRuleSet>> GetRuleSetsAsync(int strategyId)
        {
            var records = await Dbset.Where(r => r.StrategyId == strategyId).OrderBy(r => r.RuleSetOrderId).ToListAsync();
            return records;
        }

    }
}