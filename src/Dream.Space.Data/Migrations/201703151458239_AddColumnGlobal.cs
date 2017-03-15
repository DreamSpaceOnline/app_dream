namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddColumnGlobal : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Indicator", "Global", c => c.Boolean(nullable: false));
            DropTable("dbo.CompanyNHNL");
            DropTable("dbo.MarketNHNL");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.MarketNHNL",
                c => new
                    {
                        Market = c.String(nullable: false, maxLength: 50, unicode: false),
                        Period = c.Int(nullable: false),
                        LastUpdated = c.DateTime(nullable: false),
                        JsonData = c.String(),
                    })
                .PrimaryKey(t => new { t.Market, t.Period });
            
            CreateTable(
                "dbo.CompanyNHNL",
                c => new
                    {
                        Ticker = c.String(nullable: false, maxLength: 50, unicode: false),
                        Period = c.Int(nullable: false),
                        LastUpdated = c.DateTime(nullable: false),
                        JsonData = c.String(),
                    })
                .PrimaryKey(t => new { t.Ticker, t.Period });
            
            DropColumn("dbo.Indicator", "Global");
        }
    }
}
