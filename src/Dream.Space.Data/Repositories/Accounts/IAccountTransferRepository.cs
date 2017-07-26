using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Accounts;
using Dream.Space.Models.Enums;

namespace Dream.Space.Data.Repositories.Accounts
{
    public interface IAccountTransferRepository
    {
        Task<AccountTransferEntity> GetAsync(int id);
        Task<List<AccountTransferEntity>> GetAllAsync(int accountId);
        AccountTransferEntity Add(AccountTransferEntity accountTransferEntity);
        Task CommitAsync();
        Task<List<AccountTransferEntity>> GetTransfers(int accountId, TransferType transferType, DateTime from, DateTime to);
        Task<decimal> GetOverallBalance(int accountId, DateTime date);
        Task<decimal> GetBalanceFromTrades(int accountId, DateTime date);
    }
}