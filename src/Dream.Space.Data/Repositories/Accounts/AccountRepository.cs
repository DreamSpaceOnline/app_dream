using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Accounts;

namespace Dream.Space.Data.Repositories.Accounts
{

    public class AccountRepository : DreamDbRepository<AccountEntity>, IAccountRepository
    {
        public AccountRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<AccountEntity> GetAsync(int id)
        {
            var record = await Dbset.FirstOrDefaultAsync(r => r.AccountId == id);
            return record;
        }

        public async Task<List<AccountEntity>> GetAllAsync()
        {
            var records = await Dbset.OrderBy(r => r.Name).ToListAsync();
            return records;
        }
    }
}