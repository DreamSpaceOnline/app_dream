using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data.Repositories.Accounts;
using Dream.Space.Data.Requests.Accounts;
using Dream.Space.Models.Accounts;

namespace Dream.Space.Data.Services
{
    public class AccountService: IAccountService
    {
        private readonly ILifetimeScope _container;

        public AccountService(ILifetimeScope container)
        {
            _container = container;
        }

        public async Task Deposit(DepositRequest request)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IAccountRepository>();
                var entity = await repository.GetAsync(request.AccountId);
                if (entity != null)
                {
                    //return new ArticleModel(entity);
                }
            }
        }

        public Task Withdraw(WithdrawRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<decimal> GetMaxRiskValue(int accountId, DateTime date)
        {
            throw new NotImplementedException();
        }

        public Task CreateTrade(CreateTradeRequest request)
        {
            throw new NotImplementedException();
        }

        public Task CloseTrade(CloseTradeRequest request)
        {
            throw new NotImplementedException();
        }

        public Task CloseTradePartially(CloseTradePartiallyRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<decimal> GetOverallBalance(int accountId, DateTime date)
        {
            throw new NotImplementedException();
        }

        public Task<decimal> GetBalanceFromTrades(int accountId, DateTime date)
        {
            throw new NotImplementedException();
        }

        public Task<List<AccountModel>> GetAccounts()
        {
            throw new NotImplementedException();
        }
    }
}
