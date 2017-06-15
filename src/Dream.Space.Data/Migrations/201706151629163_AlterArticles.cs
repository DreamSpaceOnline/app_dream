namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterArticles : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Article", "Summary", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Article", "Summary");
        }
    }
}
