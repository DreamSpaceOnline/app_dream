namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Accounts : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Account",
                c => new
                    {
                        AccountId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 100),
                        UserId = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.AccountId);
            
            CreateTable(
                "dbo.AccountTrade",
                c => new
                    {
                        TradeId = c.Int(nullable: false, identity: true),
                        AccountId = c.Int(nullable: false),
                        EntryPrice = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Direction = c.Int(nullable: false),
                        EntryDate = c.DateTime(nullable: false),
                        CloseDate = c.DateTime(nullable: false),
                        SharesCount = c.Int(nullable: false),
                        ClosePrice = c.Decimal(nullable: false, precision: 18, scale: 2),
                    })
                .PrimaryKey(t => t.TradeId)
                .ForeignKey("dbo.Account", t => t.AccountId, cascadeDelete: false)
                .Index(t => t.AccountId);
            
            CreateTable(
                "dbo.AccountTransfer",
                c => new
                    {
                        TransferId = c.Int(nullable: false, identity: true),
                        AccountId = c.Int(nullable: false),
                        Amount = c.Decimal(nullable: false, precision: 18, scale: 2),
                        TransferType = c.Int(nullable: false),
                        TransferDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.TransferId)
                .ForeignKey("dbo.Account", t => t.AccountId, cascadeDelete: false)
                .Index(t => t.AccountId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AccountTransfer", "AccountId", "dbo.Account");
            DropForeignKey("dbo.AccountTrade", "AccountId", "dbo.Account");
            DropIndex("dbo.AccountTransfer", new[] { "AccountId" });
            DropIndex("dbo.AccountTrade", new[] { "AccountId" });
            DropTable("dbo.AccountTransfer");
            DropTable("dbo.AccountTrade");
            DropTable("dbo.Account");
        }
    }
}
