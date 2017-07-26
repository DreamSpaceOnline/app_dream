using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Dream.Space.Models.Accounts;

namespace Dream.Space.Data.Entities.Accounts
{

    [Table("Account")]
    public class AccountEntity : IAccountEntity
    {
        [Key]
        public int AccountId { get; set; }

        [Required, StringLength(100)]
        [Index("IX_NameUserId", 1, IsUnique = true)]
        public string Name { get; set; }

        [Required, StringLength(100)]
        [Index("IX_NameUserId", 2, IsUnique = true)]
        public string UserId { get; set; }

        public decimal RiskPerTrade { get; set; }
        public decimal RiskPerMonth { get; set; }
    }
}
