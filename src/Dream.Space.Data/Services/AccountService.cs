using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data.Entities.Accounts;
using Dream.Space.Data.Repositories.Accounts;
using Dream.Space.Data.Requests.Accounts;
using Dream.Space.Models.Accounts;
using Dream.Space.Models.Enums;

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
            await Transfer(request, TransferType.Deposit);
        }

        public async Task Withdraw(WithdrawRequest request)
        {
            await Transfer(request, TransferType.Withdrawal);
        }

        private async Task Transfer(DepositRequest request, TransferType transferType)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IAccountTransferRepository>();
                var entity = repository.Add(new AccountTransferEntity());
                entity.AccountId = request.AccountId;
                entity.TransferDate = request.TransferDate;
                entity.Amount = request.Amount;
                entity.TransferType = transferType;

                await repository.CommitAsync();
            }
        }


        public async Task<decimal> GetMaxRiskValue(int accountId, DateTime date)
        {
            using (var scope = _container.BeginLifetimeScope())
            {

                var accountRepository = scope.Resolve<IAccountRepository>();
                var account = await accountRepository.GetAsync(accountId);

                var repository = scope.Resolve<IAccountTradeRepository>();
                var trades = await repository.GetTrades(accountId, new DateTime(date.Year, date.Month, 1), date);

                var maxOpenTrades = (int)(account.RiskPerMonth / account.RiskPerTrade);
                var openTrades = trades.Count(trade => trade.CloseDate == null);
                if (maxOpenTrades <= openTrades)
                {
                    return 0;
                }

                var transferRepository = scope.Resolve<IAccountTransferRepository>();
                var tradeTransfers = await transferRepository.GetTransfers(accountId, TransferType.Trade, new DateTime(date.Year, date.Month, 1), date);
                var tradeAmount = tradeTransfers.Sum(r => r.Amount);
                var accountBalance = await transferRepository.GetOverallBalance(accountId, date);
                var maxTradeRiskValue = Math.Round(accountBalance / 100 * account.RiskPerTrade, 2);

                var maxRiskValuePerMonth = Math.Round(accountBalance / 100 * account.RiskPerMonth, 2);
                if (tradeAmount + maxRiskValuePerMonth >= maxTradeRiskValue)
                {
                    return maxTradeRiskValue;
                }

                return Math.Max(tradeAmount + maxRiskValuePerMonth, 0);
            }
        }

        public async Task<AccountTradeModel> CreateTrade(CreateTradeRequest request)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IAccountTradeRepository>();
                var entity = repository.Add(new AccountTradeEntity());

                entity.AccountId = request.AccountId;
                entity.CloseDate = null;
                entity.EntryDate = request.EntryDate;
                entity.EntryPrice = request.EntryPrice;
                entity.Direction = request.Direction;
                entity.SharesCount = request.SharesCount;

                await repository.CommitAsync();

                return new AccountTradeModel(entity);
            }
        }

        public async Task<AccountTradeModel> CloseTrade(CloseTradeRequest request)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IAccountTradeRepository>();
                var entity = await repository.GetAsync(request.TradeId);
                if (entity != null && entity.AccountId == request.AccountId)
                {
                    entity.CloseDate = request.CloseDate;
                    entity.ClosePrice = request.ClosePrice;

                    var tradeAmount = CalculateTradeAmount(entity);
                    await repository.CommitAsync();

                    var transferRequest = new DepositRequest
                    {
                        TransferDate = request.CloseDate,
                        AccountId = request.AccountId,
                        Amount = tradeAmount
                    };

                    await Transfer(transferRequest, TransferType.Trade);

                    return new AccountTradeModel(entity);
                }

                return null;
            }
        }

        private decimal CalculateTradeAmount(IAccountTradeEntity entity)
        {
            decimal result;

            if (entity.Direction == TradeDirection.Long)
            {
                result = Math.Round((entity.ClosePrice - entity.EntryPrice) * entity.SharesCount, 2);
            }
            else
            {
                result = Math.Round((entity.EntryPrice - entity.ClosePrice) * entity.SharesCount, 2);
            }
            return result;
        }

        public async Task<AccountTradeModel> CloseTradePartially(CloseTradePartiallyRequest request)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var tradeRepository = scope.Resolve<IAccountTradeRepository>();
                var trade = await tradeRepository.GetAsync(request.TradeId);
                if (trade != null && trade.AccountId == request.AccountId)
                {
                    if (trade.SharesCount > request.SharesCount)
                    {
                        trade.SharesCount -= request.SharesCount;
                        await tradeRepository.CommitAsync();

                        var createTradeRequest = new CreateTradeRequest
                        {
                            AccountId = request.AccountId,
                            EntryDate = trade.EntryDate,
                            EntryPrice = trade.EntryPrice,
                            Direction = trade.Direction,
                            SharesCount = request.SharesCount
                        };

                        var completedTrade = await CreateTrade(createTradeRequest);

                        var closeTradeRequest = new CloseTradeRequest
                        {
                            AccountId = request.AccountId,
                            TradeId = completedTrade.TradeId,
                            CloseDate = request.CloseDate,
                            ClosePrice = request.ClosePrice
                        };

                        return await CloseTrade(closeTradeRequest);
                    }
                }
                return null;
            }
        }

        public async Task<decimal> GetOverallBalance(int accountId, DateTime date)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var transferRepository = scope.Resolve<IAccountTransferRepository>();
                var balance = await transferRepository.GetOverallBalance(accountId, date);

                return balance;
            }
        }

        public async Task<decimal> GetBalanceFromTrades(int accountId, DateTime date)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var transferRepository = scope.Resolve<IAccountTransferRepository>();
                var balance = await transferRepository.GetBalanceFromTrades(accountId, date);

                return balance;
            }
        }

        public async Task<List<AccountModel>> GetAccounts(string userId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IAccountRepository>();
                var accounts = await repository.GetAllAsync(userId);

                return accounts.Select(a => new AccountModel(a)).ToList();
            }
        }

        public async Task<AccountModel> CreateAccount(CreateAccountRequest request)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IAccountRepository>();
                var entity = repository.Add(new AccountEntity());
                entity.Name = request.AccountName;
                entity.UserId = request.UserId;
                entity.RiskPerTrade = request.RiskPerTrade;
                entity.RiskPerMonth = request.RiskPerMonth;

                await repository.CommitAsync();
                return new AccountModel(entity);
            }
        }
    }
}
