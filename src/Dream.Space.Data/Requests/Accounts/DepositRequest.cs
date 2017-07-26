using System;

namespace Dream.Space.Data.Requests.Accounts
{
    public class DepositRequest
    {
        public int AccountId { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
    }
}