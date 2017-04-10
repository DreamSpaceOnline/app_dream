namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterScheduledJob1 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.ScheduledJob", "CompletedDate", c => c.DateTime());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.ScheduledJob", "CompletedDate", c => c.DateTime(nullable: false));
        }
    }
}
