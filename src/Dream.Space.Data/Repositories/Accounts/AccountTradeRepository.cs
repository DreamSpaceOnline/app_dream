using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Accounts;

namespace Dream.Space.Data.Repositories.Accounts
{

    public class AccountTradeRepository : DreamDbRepository<AccountTradeEntity>, IAccountTradeRepository
    {
        public AccountTradeRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<AccountTradeEntity> GetAsync(int id)
        {
            var record = await Dbset.FirstOrDefaultAsync(r => r.AccountId == id);
            return record;
        }

        public async Task<List<AccountTradeEntity>> GetAllAsync(int accountId)
        {
            var records = await Dbset.Where(r => r.AccountId == accountId).OrderBy(r => r.EntryDate).ToListAsync();
            return records;
        }

        public async Task<List<AccountTradeEntity>> GetTrades(int accountId, DateTime from, DateTime to)
        {
            var records = await Dbset.Where(r => r.AccountId == accountId && r.EntryDate > from && r.EntryDate < to).OrderBy(r => r.EntryDate).ToListAsync();
            return records;
        }
    }
}