using System.Data.Entity.Migrations;

namespace Dream.Space.Data.Migrations
{
    public partial class AlterCompanyTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Company", "UpdateSuccessful", c => c.Boolean(nullable: false));
            AddColumn("dbo.Company", "UpdateError", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Company", "UpdateError");
            DropColumn("dbo.Company", "UpdateSuccessful");
        }
    }
}
