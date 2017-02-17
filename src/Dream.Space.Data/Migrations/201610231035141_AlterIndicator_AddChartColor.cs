using System.Data.Entity.Migrations;

namespace Dream.Space.Data.Migrations
{
    public partial class AlterIndicator_AddChartColor : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Indicator", "ChartColor", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Indicator", "ChartColor");
        }
    }
}
