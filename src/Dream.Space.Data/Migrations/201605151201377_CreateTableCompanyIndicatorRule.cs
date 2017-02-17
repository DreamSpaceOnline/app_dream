using System.Data.Entity.Migrations;

namespace Dream.Space.Data.Migrations
{
    public partial class CreateTableCompanyIndicatorRule : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CompanyIndicatorRule",
                c => new
                    {
                        Ticker = c.String(nullable: false, maxLength: 50, unicode: false),
                        IndicatorRuleId = c.Int(nullable: false),
                        Valid = c.Boolean(nullable: false),
                        LastUpdated = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => new { t.Ticker, t.IndicatorRuleId });
            
        }
        
        public override void Down()
        {
            DropTable("dbo.CompanyIndicatorRule");
        }
    }
}
