namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateIntermediateResults : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.IndicatorIntermediateResult",
                c => new
                    {
                        IndicatorId = c.Int(nullable: false),
                        JobId = c.Int(nullable: false),
                        ValuesJson = c.String(),
                    })
                .PrimaryKey(t => new { t.IndicatorId, t.JobId });
            
        }
        
        public override void Down()
        {
            DropTable("dbo.IndicatorIntermediateResult");
        }
    }
}
