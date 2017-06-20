namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterCompany1 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Company", "Sector");
            DropColumn("dbo.Company", "Industry");
            DropColumn("dbo.Company", "SummaryUrl");
            DropColumn("dbo.Company", "LiveQuoteJson");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Company", "LiveQuoteJson", c => c.String(maxLength: 255, unicode: false));
            AddColumn("dbo.Company", "SummaryUrl", c => c.String(maxLength: 255, unicode: false));
            AddColumn("dbo.Company", "Industry", c => c.String(maxLength: 255, unicode: false));
            AddColumn("dbo.Company", "Sector", c => c.String(maxLength: 255, unicode: false));
        }
    }
}
