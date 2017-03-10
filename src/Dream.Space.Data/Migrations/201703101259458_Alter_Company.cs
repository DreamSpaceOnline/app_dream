namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Alter_Company : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Company", "StartDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Company", "EndDate", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Company", "EndDate");
            DropColumn("dbo.Company", "StartDate");
        }
    }
}
