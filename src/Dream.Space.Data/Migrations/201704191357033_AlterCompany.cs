namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterCompany : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Company", "IsIndex", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Company", "IsIndex");
        }
    }
}
