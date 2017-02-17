using System.Data.Entity.Migrations;

namespace Dream.Space.Data.Migrations
{
    public partial class AlterStrategy2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Strategy", "JsonStrategyBlocks", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Strategy", "JsonStrategyBlocks");
        }
    }
}
