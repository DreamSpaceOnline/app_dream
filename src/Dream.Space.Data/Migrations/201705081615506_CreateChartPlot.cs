namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateChartPlot : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ChartPlot",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        LayoutId = c.Int(nullable: false),
                        PlotId = c.Int(nullable: false),
                        OrderId = c.Int(nullable: false),
                        Height = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ChartPlot");
        }
    }
}
