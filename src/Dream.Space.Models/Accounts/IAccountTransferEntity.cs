using System;
using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Accounts
{
    public interface IAccountTransferEntity
    {
        int TransferId { get; set; }
        int AccountId { get; set; }
        decimal Amount { get; set; }
        DateTime TransferDate { get; set; }
        TransferType TransferType { get; set; }
    }
}