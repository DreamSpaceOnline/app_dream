namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterScheduledJob : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ScheduledJob", "CompletedDate", c => c.DateTime(nullable: false));
            DropColumn("dbo.ScheduledJob", "CompletetDate");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ScheduledJob", "CompletetDate", c => c.DateTime(nullable: false));
            DropColumn("dbo.ScheduledJob", "CompletedDate");
        }
    }
}
