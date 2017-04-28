namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateChartLayout : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ChartLayout",
                c => new
                    {
                        LayoutId = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Deleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.LayoutId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ChartLayout");
        }
    }
}
