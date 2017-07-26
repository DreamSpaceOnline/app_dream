namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterAccount1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Account", "RiskPerTrade", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AddColumn("dbo.Account", "RiskPerMonth", c => c.Decimal(nullable: false, precision: 18, scale: 2));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Account", "RiskPerMonth");
            DropColumn("dbo.Account", "RiskPerTrade");
        }
    }
}
