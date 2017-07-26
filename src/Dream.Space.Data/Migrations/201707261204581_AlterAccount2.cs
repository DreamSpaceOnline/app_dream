namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterAccount2 : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Account", new[] { "Name" });
            AlterColumn("dbo.Account", "UserId", c => c.String(nullable: false, maxLength: 100));
            CreateIndex("dbo.Account", new[] { "Name", "UserId" }, unique: true, name: "IX_NameUserId");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Account", "IX_NameUserId");
            AlterColumn("dbo.Account", "UserId", c => c.String(nullable: false));
            CreateIndex("dbo.Account", "Name", unique: true);
        }
    }
}
