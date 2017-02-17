using System.Data.Entity.Migrations;

namespace Dream.Space.Data.Migrations
{
    public partial class AlterStrategy_AddUrl : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Article", "Deleted", c => c.Boolean(nullable: false));
            AddColumn("dbo.Strategy", "Url", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Strategy", "Url");
            DropColumn("dbo.Article", "Deleted");
        }
    }
}
