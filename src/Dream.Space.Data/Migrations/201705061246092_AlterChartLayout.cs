namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterChartLayout : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ChartLayout", "Description", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.ChartLayout", "Description");
        }
    }
}
