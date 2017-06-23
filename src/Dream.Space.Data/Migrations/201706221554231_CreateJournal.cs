namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateJournal : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Journal",
                c => new
                    {
                        JournalId = c.Int(nullable: false, identity: true),
                        Created = c.DateTime(nullable: false),
                        EntryDate = c.DateTime(nullable: false),
                        ExitDate = c.DateTime(nullable: false),
                        UserId = c.String(),
                        Summary = c.String(),
                        Ticker = c.String(),
                        Trade = c.Int(nullable: false),
                        EntryPrice = c.Decimal(nullable: false, precision: 18, scale: 2),
                        StopLossPrice = c.Decimal(nullable: false, precision: 18, scale: 2),
                        TakeProfitPrice = c.Decimal(nullable: false, precision: 18, scale: 2),
                        AccountId = c.Int(nullable: false),
                        StrategyId = c.Int(nullable: false),
                        MaxRisk = c.Decimal(nullable: false, precision: 18, scale: 2),
                    })
                .PrimaryKey(t => t.JournalId);
            
            CreateTable(
                "dbo.TradeOrder",
                c => new
                    {
                        TradeOrderId = c.Int(nullable: false, identity: true),
                        JournalId = c.Int(nullable: false),
                        Created = c.DateTime(nullable: false),
                        SharePrice = c.Decimal(nullable: false, precision: 18, scale: 2),
                        SharesCount = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.TradeOrderId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.TradeOrder");
            DropTable("dbo.Journal");
        }
    }
}
