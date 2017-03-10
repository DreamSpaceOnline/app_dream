namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CompanySector : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Company", "SectorId", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Company", "SectorId");
        }
    }
}
