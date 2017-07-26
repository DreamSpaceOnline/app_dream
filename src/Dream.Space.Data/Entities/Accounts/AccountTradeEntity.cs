using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Dream.Space.Models.Accounts;
using Dream.Space.Models.Enums;

namespace Dream.Space.Data.Entities.Accounts
{
    [Table("AccountTrade")]
    public class AccountTradeEntity : IAccountTradeEntity
    {
        [Key]
        public int TradeId { get; set; }

        [ForeignKey("Account")]
        public int AccountId { get; set; }

        [Required]
        public decimal EntryPrice { get; set; }
        [Required]
        public TradeDirection Direction { get; set; }
        [Required]
        public DateTime EntryDate { get; set; }

        public DateTime CloseDate { get; set; }
        [Required]
        public int SharesCount { get; set; }

        public decimal ClosePrice { get; set; }

        public AccountEntity Account { get; set; }

    }
}