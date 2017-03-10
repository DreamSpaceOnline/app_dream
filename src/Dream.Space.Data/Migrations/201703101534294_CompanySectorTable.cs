namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CompanySectorTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CompanySector",
                c => new
                    {
                        SectorId = c.Int(nullable: false, identity: true),
                        SectorName = c.String(nullable: false, maxLength: 250),
                    })
                .PrimaryKey(t => t.SectorId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.CompanySector");
        }
    }
}
