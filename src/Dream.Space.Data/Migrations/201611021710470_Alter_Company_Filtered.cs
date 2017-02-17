using System.Data.Entity.Migrations;

namespace Dream.Space.Data.Migrations
{
    public partial class Alter_Company_Filtered : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Company", "Filtered", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Company", "Filtered");
        }
    }
}
