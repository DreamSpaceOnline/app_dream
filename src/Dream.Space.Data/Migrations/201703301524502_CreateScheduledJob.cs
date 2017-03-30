namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateScheduledJob : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ScheduledJob",
                c => new
                    {
                        JobId = c.Int(nullable: false, identity: true),
                        JobType = c.Int(nullable: false),
                        StartDate = c.DateTime(nullable: false),
                        CompletetDate = c.DateTime(nullable: false),
                        JobName = c.String(),
                        Status = c.Int(nullable: false),
                        Progress = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.JobId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ScheduledJob");
        }
    }
}
