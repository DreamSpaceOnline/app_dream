using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Accounts;

namespace Dream.Space.Data.Repositories.Accounts
{
    public interface IAccountRepository
    {
        Task<AccountEntity> GetAsync(int id);
        Task<List<AccountEntity>> GetAllAsync();

    }
}
