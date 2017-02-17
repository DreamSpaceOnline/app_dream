using System.Data.Entity.Migrations;

namespace Dream.Space.Data.Migrations
{
    public partial class AlterIndicator : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Indicator", "Period", c => c.Int(nullable: false));
            DropColumn("dbo.Indicator", "QuotePeriod");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Indicator", "QuotePeriod", c => c.Int(nullable: false));
            DropColumn("dbo.Indicator", "Period");
        }
    }
}
