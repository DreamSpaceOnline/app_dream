namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterLayout1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ChartLayoutPeriod",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        LayoutId = c.Int(nullable: false),
                        Period = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            DropColumn("dbo.ChartLayout", "Period");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ChartLayout", "Period", c => c.Int(nullable: false));
            DropTable("dbo.ChartLayoutPeriod");
        }
    }
}
