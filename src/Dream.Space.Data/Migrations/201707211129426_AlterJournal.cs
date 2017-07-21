namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterJournal : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Journal", "TradeDirection", c => c.Int(nullable: false));
            AddColumn("dbo.Journal", "MaxRiskValuePrice", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AddColumn("dbo.Journal", "RewardRiskRatio", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AddColumn("dbo.Journal", "MaxSharesCount", c => c.Int(nullable: false));
            DropColumn("dbo.Journal", "Trade");
            DropColumn("dbo.Journal", "MaxRisk");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Journal", "MaxRisk", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AddColumn("dbo.Journal", "Trade", c => c.Int(nullable: false));
            DropColumn("dbo.Journal", "MaxSharesCount");
            DropColumn("dbo.Journal", "RewardRiskRatio");
            DropColumn("dbo.Journal", "MaxRiskValuePrice");
            DropColumn("dbo.Journal", "TradeDirection");
        }
    }
}
