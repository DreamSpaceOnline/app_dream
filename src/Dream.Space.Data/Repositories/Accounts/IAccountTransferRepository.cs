using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Accounts;

namespace Dream.Space.Data.Repositories.Accounts
{
    public interface IAccountTransferRepository
    {
        Task<AccountTransferEntity> GetAsync(int id);
        Task<List<AccountTransferEntity>> GetAllAsync(int accountId);
    }
}