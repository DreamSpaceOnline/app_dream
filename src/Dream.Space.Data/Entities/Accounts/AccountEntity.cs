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

        [Required, MaxLength(100), MinLength(2)]
        public string Name { get; set; }
        [Required]
        public string UserId { get; set; }
    }
}
