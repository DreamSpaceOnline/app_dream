using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Strategies;

namespace Dream.Space.Data.Repositories
{
    public interface IRuleSetDetailsRepository
    {
        RuleSetDetails Add(RuleSetDetails ruleSetDetails);
        Task<List<RuleSetDetails>> GetAsync(int ruleSetId);
        Task<RuleSetDetails> GetAsync(int ruleId, int ruleSetId);
        Task DeleteAsync(int ruleId, int ruleSetId);
        Task CommitAsync();
        Task DeleteAsync(int ruleSetId);
    }


    public class RuleSetDetailsRepository : DreamDbRepository<RuleSetDetails>, IRuleSetDetailsRepository
    {
        public RuleSetDetailsRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public async Task DeleteAsync(int ruleSetId)
        {
            var records = await Dbset.Where(r => r.RuleSetId == ruleSetId).OrderBy(r => r.OrderId).ToListAsync();
            if(records != null)
            {
                foreach (var entity in records)
                {
                    Dbset.Remove(entity);
                }
            }
        }

        public async Task DeleteAsync(int ruleId, int ruleSetId)
        {
            var entity = await Dbset.FirstOrDefaultAsync(e => e.RuleId == ruleId && e.RuleSetId == ruleSetId);
            if (entity != null)
            {
                Dbset.Remove(entity);
            }
        }

        public async Task<List<RuleSetDetails>> GetAsync(int ruleSetId)
        {
            var records = await Dbset.Where(r => r.RuleSetId == ruleSetId).OrderBy(r => r.OrderId).ToListAsync();
            return records;
        }

        public async Task<RuleSetDetails> GetAsync(int ruleId, int ruleSetId)
        {
            var entity = await Dbset.FirstOrDefaultAsync(e => e.RuleId == ruleId && e.RuleSetId == ruleSetId);
            return entity;
        }

    }
}