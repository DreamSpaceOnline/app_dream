namespace Dream.Space.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCommit : DbMigration
    {
        public override void Up()
        {
            //CreateTable(
            //    "dbo.Article",
            //    c => new
            //        {
            //            ArticleId = c.Int(nullable: false, identity: true),
            //            Title = c.String(nullable: false, maxLength: 250),
            //            Url = c.String(nullable: false, maxLength: 250),
            //            CategoryId = c.Int(nullable: false),
            //            OrderId = c.Int(nullable: false),
            //            JsonArticleBlocks = c.String(),
            //            IsFeatured = c.Boolean(nullable: false),
            //            Deleted = c.Boolean(nullable: false),
            //        })
            //    .PrimaryKey(t => t.ArticleId)
            //    .ForeignKey("dbo.Category", t => t.CategoryId, cascadeDelete: true)
            //    .Index(t => t.CategoryId);
            
            //CreateTable(
            //    "dbo.Category",
            //    c => new
            //        {
            //            CategoryId = c.Int(nullable: false, identity: true),
            //            Title = c.String(nullable: false, maxLength: 250),
            //            OrderId = c.Int(nullable: false),
            //            Url = c.String(nullable: false, maxLength: 250),
            //            SectionId = c.Int(nullable: false),
            //            Deleted = c.Boolean(nullable: false),
            //        })
            //    .PrimaryKey(t => t.CategoryId)
            //    .ForeignKey("dbo.Section", t => t.SectionId, cascadeDelete: true)
            //    .Index(t => t.SectionId);
            
            //CreateTable(
            //    "dbo.Section",
            //    c => new
            //        {
            //            SectionId = c.Int(nullable: false, identity: true),
            //            Title = c.String(nullable: false, maxLength: 250),
            //            Url = c.String(nullable: false, maxLength: 250),
            //            OrderId = c.Int(nullable: false),
            //            IsDeleted = c.Boolean(nullable: false),
            //        })
            //    .PrimaryKey(t => t.SectionId);
            
            //CreateTable(
            //    "dbo.Company",
            //    c => new
            //        {
            //            Ticker = c.String(nullable: false, maxLength: 50, unicode: false),
            //            Name = c.String(nullable: false, maxLength: 255, unicode: false),
            //            MarketCap = c.Decimal(nullable: false, precision: 18, scale: 2),
            //            Sector = c.String(maxLength: 255, unicode: false),
            //            Industry = c.String(maxLength: 255, unicode: false),
            //            SummaryUrl = c.String(maxLength: 255, unicode: false),
            //            LastUpdated = c.DateTime(nullable: false),
            //            LastCalculated = c.DateTime(nullable: false),
            //            Volume = c.Decimal(nullable: false, precision: 18, scale: 2),
            //            Price = c.Decimal(nullable: false, precision: 10, scale: 2),
            //            HighestPrice52 = c.Decimal(nullable: false, precision: 10, scale: 2),
            //            LowestPrice52 = c.Decimal(nullable: false, precision: 10, scale: 2),
            //            ChaosPercentage = c.Int(nullable: false),
            //            LiveQuoteJson = c.String(maxLength: 255, unicode: false),
            //            HistoryQuotesJson = c.String(),
            //            NextReportDate = c.DateTime(nullable: false),
            //            UpdateSuccessful = c.Boolean(nullable: false),
            //            UpdateError = c.String(),
            //            CalculatedSuccessful = c.Boolean(nullable: false),
            //            CalculatedError = c.String(),
            //            Filtered = c.Boolean(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Ticker);
            
            //CreateTable(
            //    "dbo.CompanyIndicator",
            //    c => new
            //        {
            //            Ticker = c.String(nullable: false, maxLength: 50, unicode: false),
            //            IndicatorId = c.Int(nullable: false),
            //            LastUpdated = c.DateTime(nullable: false),
            //            JsonData = c.String(),
            //        })
            //    .PrimaryKey(t => new { t.Ticker, t.IndicatorId });
            
            //CreateTable(
            //    "dbo.CompanyNHNL",
            //    c => new
            //        {
            //            Ticker = c.String(nullable: false, maxLength: 50, unicode: false),
            //            Period = c.Int(nullable: false),
            //            LastUpdated = c.DateTime(nullable: false),
            //            JsonData = c.String(),
            //        })
            //    .PrimaryKey(t => new { t.Ticker, t.Period });
            
            //CreateTable(
            //    "dbo.CompanyRuleSet",
            //    c => new
            //        {
            //            Ticker = c.String(nullable: false, maxLength: 50, unicode: false),
            //            RuleSetId = c.Int(nullable: false),
            //            IsValid = c.Boolean(nullable: false),
            //            LastUpdated = c.DateTime(nullable: false),
            //        })
            //    .PrimaryKey(t => new { t.Ticker, t.RuleSetId })
            //    .ForeignKey("dbo.RuleSet", t => t.RuleSetId, cascadeDelete: true)
            //    .Index(t => t.RuleSetId);
            
            //CreateTable(
            //    "dbo.RuleSet",
            //    c => new
            //        {
            //            RuleSetId = c.Int(nullable: false, identity: true),
            //            Name = c.String(nullable: false, maxLength: 50, unicode: false),
            //            Description = c.String(maxLength: 1000, unicode: false),
            //            Deleted = c.Boolean(nullable: false),
            //            Period = c.Int(nullable: false),
            //        })
            //    .PrimaryKey(t => t.RuleSetId);
            
            //CreateTable(
            //    "dbo.Indicator",
            //    c => new
            //        {
            //            IndicatorId = c.Int(nullable: false, identity: true),
            //            Name = c.String(nullable: false, maxLength: 50, unicode: false),
            //            Description = c.String(maxLength: 1000, unicode: false),
            //            Period = c.Int(nullable: false),
            //            JsonParams = c.String(nullable: false, maxLength: 255, unicode: false),
            //            LastUpdated = c.DateTime(nullable: false),
            //            Deleted = c.Boolean(nullable: false),
            //            ChartPlotNumber = c.Int(nullable: false),
            //            ChartColor = c.String(),
            //            ChartType = c.Int(nullable: false),
            //        })
            //    .PrimaryKey(t => t.IndicatorId);
            
            //CreateTable(
            //    "dbo.MarketNHNL",
            //    c => new
            //        {
            //            Market = c.String(nullable: false, maxLength: 50, unicode: false),
            //            Period = c.Int(nullable: false),
            //            LastUpdated = c.DateTime(nullable: false),
            //            JsonData = c.String(),
            //        })
            //    .PrimaryKey(t => new { t.Market, t.Period });
            
            //CreateTable(
            //    "dbo.Rule",
            //    c => new
            //        {
            //            RuleId = c.Int(nullable: false, identity: true),
            //            Name = c.String(nullable: false, maxLength: 50, unicode: false),
            //            Description = c.String(maxLength: 1000, unicode: false),
            //            Deleted = c.Boolean(nullable: false),
            //            Period = c.Int(nullable: false),
            //            DataSourceV1 = c.Int(nullable: false),
            //            DataSourceV2 = c.Int(nullable: false),
            //            DataSeriesV1 = c.Int(nullable: false),
            //            DataSeriesV2 = c.Int(nullable: false),
            //            ConstV1 = c.String(),
            //            ConstV2 = c.String(),
            //            SkipItemsV1 = c.Int(nullable: false),
            //            SkipItemsV2 = c.Int(nullable: false),
            //            TakeItemsV1 = c.Int(nullable: false),
            //            TakeItemsV2 = c.Int(nullable: false),
            //            TransformItemsV1 = c.Int(nullable: false),
            //            TransformItemsV2 = c.Int(nullable: false),
            //            Condition = c.Int(nullable: false),
            //        })
            //    .PrimaryKey(t => t.RuleId);
            
            //CreateTable(
            //    "dbo.RuleSetDetails",
            //    c => new
            //        {
            //            RuleId = c.Int(nullable: false),
            //            RuleSetId = c.Int(nullable: false),
            //            OrderId = c.Int(nullable: false),
            //        })
            //    .PrimaryKey(t => new { t.RuleId, t.RuleSetId })
            //    .ForeignKey("dbo.Rule", t => t.RuleId, cascadeDelete: true)
            //    .ForeignKey("dbo.RuleSet", t => t.RuleSetId, cascadeDelete: true)
            //    .Index(t => t.RuleId)
            //    .Index(t => t.RuleSetId);
            
            //CreateTable(
            //    "dbo.Strategy",
            //    c => new
            //        {
            //            StrategyId = c.Int(nullable: false, identity: true),
            //            Name = c.String(nullable: false, maxLength: 255, unicode: false),
            //            Url = c.String(),
            //            JsonArticleBlocks = c.String(),
            //            Description = c.String(),
            //            Deleted = c.Boolean(nullable: false),
            //            Active = c.Boolean(nullable: false),
            //        })
            //    .PrimaryKey(t => t.StrategyId);
            
            //CreateTable(
            //    "dbo.StrategyRuleSet",
            //    c => new
            //        {
            //            StrategyId = c.Int(nullable: false),
            //            RuleSetId = c.Int(nullable: false),
            //            Deleted = c.Boolean(nullable: false),
            //            OrderId = c.Int(nullable: false),
            //            Optional = c.Boolean(nullable: false),
            //        })
            //    .PrimaryKey(t => new { t.StrategyId, t.RuleSetId })
            //    .ForeignKey("dbo.RuleSet", t => t.RuleSetId, cascadeDelete: true)
            //    .ForeignKey("dbo.Strategy", t => t.StrategyId, cascadeDelete: true)
            //    .Index(t => t.StrategyId)
            //    .Index(t => t.RuleSetId);
            
            //CreateTable(
            //    "dbo.vRuleSet",
            //    c => new
            //        {
            //            RuleId = c.Int(nullable: false),
            //            RuleSetId = c.Int(nullable: false),
            //            RuleSetName = c.String(),
            //            Description = c.String(),
            //            RuleDescription = c.String(),
            //            Period = c.Int(nullable: false),
            //            Deleted = c.Boolean(nullable: false),
            //            RuleName = c.String(),
            //            OrderId = c.Int(nullable: false),
            //        })
            //    .PrimaryKey(t => new { t.RuleId, t.RuleSetId });
            
            //CreateTable(
            //    "dbo.vStrategy",
            //    c => new
            //        {
            //            StrategyId = c.Int(nullable: false),
            //            RuleSetId = c.Int(nullable: false),
            //            StrategyName = c.String(),
            //            StrategyDescription = c.String(),
            //            JsonArticleBlocks = c.String(),
            //            Url = c.String(),
            //            Deleted = c.Boolean(nullable: false),
            //            Active = c.Boolean(nullable: false),
            //            RuleSetName = c.String(),
            //            RuleSetDescription = c.String(),
            //            Period = c.Int(nullable: false),
            //            OrderId = c.Int(nullable: false),
            //            Optional = c.Boolean(nullable: false),
            //        })
            //    .PrimaryKey(t => new { t.StrategyId, t.RuleSetId });
            
            //CreateTable(
            //    "dbo.vStrategyRule",
            //    c => new
            //        {
            //            StrategyId = c.Int(nullable: false),
            //            RuleSetId = c.Int(nullable: false),
            //            RuleId = c.Int(nullable: false),
            //            Optional = c.Boolean(nullable: false),
            //            RuleSetName = c.String(),
            //            OrderId = c.Int(nullable: false),
            //            RuleName = c.String(),
            //            Period = c.Int(nullable: false),
            //            DataSourceV1 = c.Int(nullable: false),
            //            DataSourceV2 = c.Int(nullable: false),
            //            DataSeriesV1 = c.Int(nullable: false),
            //            DataSeriesV2 = c.Int(nullable: false),
            //            ConstV1 = c.String(),
            //            ConstV2 = c.String(),
            //            SkipItemsV1 = c.Int(nullable: false),
            //            SkipItemsV2 = c.Int(nullable: false),
            //            TakeItemsV1 = c.Int(nullable: false),
            //            TakeItemsV2 = c.Int(nullable: false),
            //            TransformItemsV1 = c.Int(nullable: false),
            //            TransformItemsV2 = c.Int(nullable: false),
            //            Condition = c.Int(nullable: false),
            //        })
            //    .PrimaryKey(t => new { t.StrategyId, t.RuleSetId, t.RuleId });
            
            //CreateTable(
            //    "dbo.vStrategyRuleSet",
            //    c => new
            //        {
            //            StrategyId = c.Int(nullable: false),
            //            RuleSetId = c.Int(nullable: false),
            //            StrategyActive = c.Boolean(nullable: false),
            //            RuleSetName = c.String(),
            //            RuleSetDescription = c.String(),
            //            RuleSetPeriod = c.Int(nullable: false),
            //            RuleSetOrderId = c.Int(nullable: false),
            //            RuleSetOptional = c.Boolean(nullable: false),
            //        })
            //    .PrimaryKey(t => new { t.StrategyId, t.RuleSetId });
            
        }
        
        public override void Down()
        {
            //DropForeignKey("dbo.StrategyRuleSet", "StrategyId", "dbo.Strategy");
            //DropForeignKey("dbo.StrategyRuleSet", "RuleSetId", "dbo.RuleSet");
            //DropForeignKey("dbo.RuleSetDetails", "RuleSetId", "dbo.RuleSet");
            //DropForeignKey("dbo.RuleSetDetails", "RuleId", "dbo.Rule");
            //DropForeignKey("dbo.CompanyRuleSet", "RuleSetId", "dbo.RuleSet");
            //DropForeignKey("dbo.Article", "CategoryId", "dbo.Category");
            //DropForeignKey("dbo.Category", "SectionId", "dbo.Section");
            //DropIndex("dbo.StrategyRuleSet", new[] { "RuleSetId" });
            //DropIndex("dbo.StrategyRuleSet", new[] { "StrategyId" });
            //DropIndex("dbo.RuleSetDetails", new[] { "RuleSetId" });
            //DropIndex("dbo.RuleSetDetails", new[] { "RuleId" });
            //DropIndex("dbo.CompanyRuleSet", new[] { "RuleSetId" });
            //DropIndex("dbo.Category", new[] { "SectionId" });
            //DropIndex("dbo.Article", new[] { "CategoryId" });
            //DropTable("dbo.vStrategyRuleSet");
            //DropTable("dbo.vStrategyRule");
            //DropTable("dbo.vStrategy");
            //DropTable("dbo.vRuleSet");
            //DropTable("dbo.StrategyRuleSet");
            //DropTable("dbo.Strategy");
            //DropTable("dbo.RuleSetDetails");
            //DropTable("dbo.Rule");
            //DropTable("dbo.MarketNHNL");
            //DropTable("dbo.Indicator");
            //DropTable("dbo.RuleSet");
            //DropTable("dbo.CompanyRuleSet");
            //DropTable("dbo.CompanyNHNL");
            //DropTable("dbo.CompanyIndicator");
            //DropTable("dbo.Company");
            //DropTable("dbo.Section");
            //DropTable("dbo.Category");
            //DropTable("dbo.Article");
        }
    }
}
