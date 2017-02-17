using System.Data.Entity.Migrations;

namespace Dream.Space.Data.Migrations
{
    public partial class AlterTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Indicator", "ChartType", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Indicator", "ChartType");
        }
    }
}
