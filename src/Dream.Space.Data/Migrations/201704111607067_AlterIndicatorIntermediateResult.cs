namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterIndicatorIntermediateResult : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.IndicatorIntermediateResult");
            AddColumn("dbo.IndicatorIntermediateResult", "Id", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.IndicatorIntermediateResult", "Id");
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.IndicatorIntermediateResult");
            DropColumn("dbo.IndicatorIntermediateResult", "Id");
            AddPrimaryKey("dbo.IndicatorIntermediateResult", new[] { "IndicatorId", "JobId" });
        }
    }
}
