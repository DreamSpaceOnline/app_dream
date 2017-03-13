namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateGlobalIndicator : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.GlobalIndicator",
                c => new
                    {
                        IndicatorId = c.Int(nullable: false),
                        SectorId = c.Int(nullable: false),
                        StartDate = c.DateTime(nullable: false),
                        EndDate = c.DateTime(nullable: false),
                        LastCalculated = c.DateTime(nullable: false),
                        CompanyCount = c.Int(nullable: false),
                        ValuesJson = c.String(),
                        CalculatedSuccessful = c.Boolean(nullable: false),
                        CalculatedError = c.String(),
                    })
                .PrimaryKey(t => new { t.IndicatorId, t.SectorId });
            
        }
        
        public override void Down()
        {
            DropTable("dbo.GlobalIndicator");
        }
    }
}
