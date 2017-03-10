namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CompanyIndustryColumn : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Company", "IndustryId", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Company", "IndustryId");
        }
    }
}
