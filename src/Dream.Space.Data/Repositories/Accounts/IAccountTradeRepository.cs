using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Accounts;

namespace Dream.Space.Data.Repositories.Accounts
{
    public interface IAccountTradeRepository
    {
        Task<AccountTradeEntity> GetAsync(int id);
        Task<List<AccountTradeEntity>> GetAllAsync(int accountId);

    }
}