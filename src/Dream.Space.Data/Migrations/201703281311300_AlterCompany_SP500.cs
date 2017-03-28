namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterCompany_SP500 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Company", "SP500", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Company", "SP500");
        }
    }
}
