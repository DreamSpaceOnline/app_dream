namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CompanyIndustry : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CompanyInductry",
                c => new
                    {
                        InductryId = c.Int(nullable: false, identity: true),
                        SectorId = c.Int(nullable: false),
                        InductryName = c.String(nullable: false, maxLength: 250, unicode: false),
                    })
                .PrimaryKey(t => t.InductryId)
                .ForeignKey("dbo.CompanySector", t => t.SectorId, cascadeDelete: true)
                .Index(t => t.SectorId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.CompanyInductry", "SectorId", "dbo.CompanySector");
            DropIndex("dbo.CompanyInductry", new[] { "SectorId" });
            DropTable("dbo.CompanyInductry");
        }
    }
}
