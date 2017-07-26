using System;
using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Accounts
{
    public class AccountTradeModel : IAccountTradeEntity
    {
        public AccountTradeModel()
        {
            
        }

        public AccountTradeModel(IAccountTradeEntity entity)
        {
            if (entity != null)
            {
                TradeId = entity.TradeId;
                AccountId = entity.AccountId;
                EntryPrice = entity.EntryPrice;
                EntryDate = entity.EntryDate;
                Direction = entity.Direction;
                CloseDate = entity.CloseDate;
                SharesCount = entity.SharesCount;
                ClosePrice = entity.ClosePrice;
            }
        }

        public int TradeId { get; set; }
        public int AccountId { get; set; }
        public decimal EntryPrice { get; set; }
        public TradeDirection Direction { get; set; }
        public DateTime EntryDate { get; set; }
        public DateTime? CloseDate { get; set; }
        public int SharesCount { get; set; }
        public decimal ClosePrice { get; set; }
    }
}