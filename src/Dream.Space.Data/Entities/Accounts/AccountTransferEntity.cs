using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Dream.Space.Models.Accounts;
using Dream.Space.Models.Enums;

namespace Dream.Space.Data.Entities.Accounts
{
    [Table("AccountTransfer")]
    public class AccountTransferEntity : IAccountTransferEntity
    {
        [Key]
        public int TransferId { get; set; }

        [ForeignKey("Account")]
        public int AccountId { get; set; }

        [Required]
        public decimal Amount { get; set; }
        [Required]
        public TransferType TransferType { get; set; }
        [Required]
        public DateTime TransferDate { get; set; }

        public AccountEntity Account { get; set; }

    }
}