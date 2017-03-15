namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddJobIdColumn : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Company", "LastJobId", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Company", "LastJobId");
        }
    }
}
