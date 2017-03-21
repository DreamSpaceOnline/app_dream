using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Strategies;
using Dream.Space.Models.Enums;

namespace Dream.Space.Data.Repositories
{
    public interface IVRuleSetRepository
    {
        Task<List<vRuleSet>> GetAllAsync(QuotePeriod period, bool includeDeleted);
        Task<List<vRuleSet>> GetAsync(int id);
    }


    public class VRuleSetRepository : DreamDbRepository<vRuleSet>, IVRuleSetRepository
    {
        public VRuleSetRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<List<vRuleSet>> GetAllAsync(QuotePeriod period, bool includeDeleted)
        {
            var records = await Dbset.Where(r => r.Period == (int)period && ( !r.Deleted || includeDeleted )).OrderBy(r => r.RuleName).ThenBy(r => r.OrderId).ToListAsync();
            return records;
        }

        public async Task<List<vRuleSet>> GetAsync(int id)
        {
            var records = await Dbset.Where(r => r.RuleSetId == id).OrderBy(r => r.OrderId).ToListAsync();
            return records;
        }

    }
}