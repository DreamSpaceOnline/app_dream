using System.Data.Entity.Migrations;

namespace Dream.Space.Data.Migrations
{
    public partial class AlterStrategy : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Strategy", "Active", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Strategy", "Active");
        }
    }
}
