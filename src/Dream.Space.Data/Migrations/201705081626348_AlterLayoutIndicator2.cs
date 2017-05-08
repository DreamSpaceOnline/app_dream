namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterLayoutIndicator2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.LayoutIndicator", "PlotId", c => c.Int(nullable: false));
            DropColumn("dbo.LayoutIndicator", "LayoutId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.LayoutIndicator", "LayoutId", c => c.Int(nullable: false));
            DropColumn("dbo.LayoutIndicator", "PlotId");
        }
    }
}
