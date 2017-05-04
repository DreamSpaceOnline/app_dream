namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterLayout : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ChartLayout", "Period", c => c.Int(nullable: false));
            AddColumn("dbo.ChartLayout", "Default", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ChartLayout", "Default");
            DropColumn("dbo.ChartLayout", "Period");
        }
    }
}
