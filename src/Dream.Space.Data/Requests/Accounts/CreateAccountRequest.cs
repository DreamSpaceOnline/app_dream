namespace Dream.Space.Data.Requests.Accounts
{
    public class CreateAccountRequest
    {
        public string AccountName { get; set; }
        public string UserId { get; set; }
        public decimal RiskPerTrade { get; set; }
        public decimal RiskPerMonth { get; set; }
    }
}