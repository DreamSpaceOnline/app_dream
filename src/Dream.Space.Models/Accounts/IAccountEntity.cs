namespace Dream.Space.Models.Accounts
{
    public interface IAccountEntity
    {
        int AccountId { get; set; }
        string Name { get; set; }
        string UserId { get; set; }
    }
}