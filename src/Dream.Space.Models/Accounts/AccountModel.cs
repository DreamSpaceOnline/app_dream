namespace Dream.Space.Models.Accounts
{
    public class AccountModel : IAccountEntity
    {
        public int AccountId { get; set; }
        public string Name { get; set; }
        public string UserId { get; set; }
    }
}