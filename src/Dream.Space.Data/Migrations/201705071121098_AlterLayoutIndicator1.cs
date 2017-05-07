namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterLayoutIndicator1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.LayoutIndicator", "Color", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.LayoutIndicator", "Color");
        }
    }
}
