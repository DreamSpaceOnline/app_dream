namespace Dream.Space.Models.Accounts
{
    public class AccountModel : IAccountEntity
    {
        public AccountModel()
        {
            
        }

        public AccountModel(IAccountEntity entity)
        {
            if (entity != null)
            {
                AccountId = entity.AccountId;
                Name = entity.Name;
                UserId = entity.UserId;
                RiskPerMonth = entity.RiskPerMonth;
                RiskPerTrade = entity.RiskPerTrade;
            }
        }

        public int AccountId { get; set; }
        public string Name { get; set; }
        public string UserId { get; set; }
        public decimal RiskPerTrade { get; set; }
        public decimal RiskPerMonth { get; set; }
    }
}