namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateChartIndicator : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.LayoutIndicator", newName: "ChartIndicator");
            DropPrimaryKey("dbo.ChartPlot");
            AlterColumn("dbo.ChartPlot", "PlotId", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.ChartPlot", "PlotId");
            DropColumn("dbo.ChartPlot", "Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ChartPlot", "Id", c => c.Int(nullable: false, identity: true));
            DropPrimaryKey("dbo.ChartPlot");
            AlterColumn("dbo.ChartPlot", "PlotId", c => c.Int(nullable: false));
            AddPrimaryKey("dbo.ChartPlot", "Id");
            RenameTable(name: "dbo.ChartIndicator", newName: "LayoutIndicator");
        }
    }
}
