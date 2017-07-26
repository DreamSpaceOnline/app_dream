using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Accounts;

namespace Dream.Space.Data.Repositories.Accounts
{

    public class AccountTransferRepository : DreamDbRepository<AccountTransferEntity>, IAccountTransferRepository
    {
        public AccountTransferRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<AccountTransferEntity> GetAsync(int id)
        {
            var record = await Dbset.FirstOrDefaultAsync(r => r.AccountId == id);
            return record;
        }

        public async Task<List<AccountTransferEntity>> GetAllAsync(int accountId)
        {
            var records = await Dbset.Where(r => r.AccountId == accountId).OrderBy(r => r.TransferDate).ToListAsync();
            return records;
        }
    }
}