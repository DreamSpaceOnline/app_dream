namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterLayoutIndicator : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.LayoutIndicator", "OrderId", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.LayoutIndicator", "OrderId");
        }
    }
}
