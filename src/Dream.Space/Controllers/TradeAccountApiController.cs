using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Dream.Space.Data.Requests.Accounts;
using Dream.Space.Data.Services;
using Dream.Space.Models.Accounts;

namespace Dream.Space.Controllers
{
    [RoutePrefix("api/trade-account")]
    public class TradeAccountApiController : ApiController
    {
        private readonly IAccountService _accountService;

        public TradeAccountApiController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost]
        [Route("deposit")]
        public async Task<IHttpActionResult> Deposit([FromBody] DepositRequest request)
        {
            await _accountService.Deposit(request);
            return Ok();
        }

        [HttpPost]
        [Route("withdraw")]
        public async Task<IHttpActionResult> Withdraw([FromBody] WithdrawRequest request)
        {
            await _accountService.Withdraw(request);
            return Ok();
        }


        [HttpGet]
        [Route("all")]
        [ResponseType(typeof(List<AccountModel>))]
        public async Task<IHttpActionResult> GetAccounts()
        {
            var userId = User.Identity.Name;
            var accounts = await _accountService.GetAccounts(userId);
            return Ok(accounts);
        }

        [HttpPost]
        [Route("create-trade")]
        [ResponseType(typeof(AccountTradeModel))]
        public async Task<IHttpActionResult> CreateTrade([FromBody] CreateTradeRequest request)
        {
            var trade = await _accountService.CreateTrade(request);
            return Ok(trade);
        }

        [HttpPost]
        [Route("close-trade")]
        [ResponseType(typeof(AccountTradeModel))]
        public async Task<IHttpActionResult> CloseTrade([FromBody] CloseTradeRequest request)
        {
            var trade = await _accountService.CloseTrade(request);
            return Ok(trade);
        }

        [HttpPost]
        [Route("close-partially")]
        [ResponseType(typeof(AccountTradeModel))]
        public async Task<IHttpActionResult> CloseTradePartially([FromBody] CloseTradePartiallyRequest request)
        {
            var trade = await _accountService.CloseTradePartially(request);
            return Ok(trade);
        }

        [HttpPost]
        [Route("create-account")]
        [ResponseType(typeof(AccountModel))]
        public async Task<IHttpActionResult> CreateAccount([FromBody] CreateAccountRequest request)
        {
            var account = await _accountService.CreateAccount(request);
            return Ok(account);
        }

        [HttpGet]
        [Route("max-trade-risk/{accountId}")]
        [ResponseType(typeof(decimal))]
        public async Task<IHttpActionResult> GetMaxRiskValue(int accountId)
        {
            var amount = await _accountService.GetMaxRiskValue(accountId, DateTime.UtcNow);
            return Ok(amount);
        }

        [HttpGet]
        [Route("overall-balance/{accountId}")]
        [ResponseType(typeof(decimal))]
        public async Task<IHttpActionResult> GetOverallBalance(int accountId)
        {
            var amount = await _accountService.GetOverallBalance(accountId, DateTime.UtcNow);
            return Ok(amount);
        }

        [HttpGet]
        [Route("trade-balance/{accountId}")]
        [ResponseType(typeof(decimal))]
        public async Task<IHttpActionResult> GetBalanceFromTrades(int accountId)
        {
            var amount = await _accountService.GetBalanceFromTrades(accountId, DateTime.UtcNow);
            return Ok(amount);
        }

    }
}
