namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterAccountTrade : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.AccountTrade", "CloseDate", c => c.DateTime());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.AccountTrade", "CloseDate", c => c.DateTime(nullable: false));
        }
    }
}
