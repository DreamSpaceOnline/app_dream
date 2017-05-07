namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterLayoutInd : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.LayoutIndicator", "LineColor", c => c.String());
            DropColumn("dbo.LayoutIndicator", "Color");
        }
        
        public override void Down()
        {
            AddColumn("dbo.LayoutIndicator", "Color", c => c.String());
            DropColumn("dbo.LayoutIndicator", "LineColor");
        }
    }
}
