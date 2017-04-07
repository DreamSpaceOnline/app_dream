namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateScheduledJobDetails : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ScheduledJobDetails",
                c => new
                    {
                        JobId = c.Int(nullable: false),
                        Ticker = c.String(nullable: false, maxLength: 50, unicode: false),
                    })
                .PrimaryKey(t => new { t.JobId, t.Ticker });
            
            DropColumn("dbo.Company", "LastJobId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Company", "LastJobId", c => c.String());
            DropTable("dbo.ScheduledJobDetails");
        }
    }
}
