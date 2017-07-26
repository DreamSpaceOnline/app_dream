using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Accounts;
using Dream.Space.Models.Enums;

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

        public async Task<List<AccountTransferEntity>> GetTransfers(int accountId, TransferType transferType, DateTime from, DateTime to)
        {
            var records = await Dbset.Where(r => r.AccountId == accountId && r.TransferType == transferType && r.TransferDate > from && r.TransferDate < to)
                .OrderBy(r => r.TransferDate).ToListAsync();
            return records;
        }

        public async Task<decimal> GetOverallBalance(int accountId, DateTime date)
        {
            var amount = await Dbset.Where(r => r.AccountId == accountId && r.TransferDate < date).SumAsync(r => r.Amount);
            return amount;
        }

        public async Task<decimal> GetBalanceFromTrades(int accountId, DateTime date)
        {
            var amount = await Dbset.Where(r => r.AccountId == accountId && r.TransferDate < date && r.TransferType == TransferType.Trade).SumAsync(r => r.Amount);
            return amount;
        }
    }
}