namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterAccount : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.Account", "Name", unique: true);
        }
        
        public override void Down()
        {
            DropIndex("dbo.Account", new[] { "Name" });
        }
    }
}
