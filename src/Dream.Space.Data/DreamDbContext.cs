using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Data.Entity.SqlServer;
using Dream.Space.Data.Entities.Articles;
using Dream.Space.Data.Entities.Companies;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Entities.Jobs;
using Dream.Space.Data.Entities.Layouts;
using Dream.Space.Data.Entities.Strategies;
using Dream.Space.Data.Entities.Logs;

namespace Dream.Space.Data
{
    public class DataContextConfiguration : DbConfiguration
    {
        public DataContextConfiguration()
        {
            SetExecutionStrategy("System.Data.SqlClient", () => new SqlAzureExecutionStrategy(5, TimeSpan.FromSeconds(10)));
        }
    }

    [DbConfigurationType(typeof(DataContextConfiguration))]
    public class DreamDbContext: DbContext
    {
        public DreamDbContext() : base("DefaultConnection")
        {
                
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //Company
            modelBuilder.Entity<Company>().Property(e => e.Name).IsRequired().HasColumnType("varchar").HasMaxLength(255);
            modelBuilder.Entity<Company>().Property(e => e.Industry).HasColumnType("varchar").HasMaxLength(255);
            modelBuilder.Entity<Company>().Property(e => e.Sector).HasColumnType("varchar").HasMaxLength(255);
            modelBuilder.Entity<Company>().Property(e => e.SummaryUrl).HasColumnType("varchar").HasMaxLength(255);
            modelBuilder.Entity<Company>().Property(e => e.LiveQuoteJson).HasColumnType("varchar").HasMaxLength(255);
            modelBuilder.Entity<Company>().Property(e => e.HighestPrice52).HasPrecision(10, 2);
            modelBuilder.Entity<Company>().Property(e => e.LowestPrice52).HasPrecision(10, 2);
            modelBuilder.Entity<Company>().Property(e => e.Price).HasPrecision(10, 2);
            modelBuilder.Entity<Company>().Property(e => e.Volume).HasPrecision(18, 2);
            modelBuilder.Entity<Company>().Property(e => e.MarketCap).HasPrecision(18, 2);
            modelBuilder.Entity<Company>().HasKey(e => e.Ticker);
            modelBuilder.Entity<Company>().Property(e => e.Ticker).IsRequired().HasColumnType("varchar").HasMaxLength(50);


            //Indicator
            modelBuilder.Entity<Indicator>().HasKey(e => e.IndicatorId);
            modelBuilder.Entity<Indicator>().Property(e => e.Name).IsRequired().HasColumnType("varchar").HasMaxLength(50);
            modelBuilder.Entity<Indicator>().Property(e => e.Description).HasColumnType("varchar").HasMaxLength(1000);
            modelBuilder.Entity<Indicator>().Property(e => e.JsonParams).IsRequired().HasColumnType("varchar").HasMaxLength(255);

            //CompanyIndicator
            modelBuilder.Entity<CompanyIndicator>().HasKey(e => new { e.Ticker, e.IndicatorId });
            modelBuilder.Entity<CompanyIndicator>().Property(e => e.Ticker).IsRequired().HasColumnType("varchar").HasMaxLength(50);

            //CompanyIndustry
            modelBuilder.Entity<CompanyIndustry>().HasKey(e => e.InductryId);
            modelBuilder.Entity<CompanyIndustry>().Property(e => e.IndustryName).IsRequired().HasColumnType("varchar").HasMaxLength(250);
            modelBuilder.Entity<CompanyIndustry>().HasRequired(a => a.Sector).WithMany(t => t.Industries).HasForeignKey(p => p.SectorId);

            //CompanyRuleSet
            modelBuilder.Entity<CompanyRuleSet>().HasKey(e => new { e.Ticker, e.RuleSetId });
            modelBuilder.Entity<CompanyRuleSet>().Property(e => e.Ticker).IsRequired().HasColumnType("varchar").HasMaxLength(50);

            //StrategyRuleSet
            modelBuilder.Entity<StrategyRuleSet>().HasKey(e => new { e.StrategyId, e.RuleSetId });

            //RuleSetDetails
            modelBuilder.Entity<RuleSetDetails>().HasKey(e => new { e.RuleId, e.RuleSetId });

            //Rule
            modelBuilder.Entity<Rule>().HasKey(e => e.RuleId);
            modelBuilder.Entity<Rule>().Property(e => e.Name).IsRequired().HasColumnType("varchar").HasMaxLength(50);
            modelBuilder.Entity<Rule>().Property(e => e.Description).HasColumnType("varchar").HasMaxLength(1000);

            modelBuilder.Entity<RuleSet>().HasKey(e => e.RuleSetId);
            modelBuilder.Entity<RuleSet>().Property(e => e.Name).IsRequired().HasColumnType("varchar").HasMaxLength(50);
            modelBuilder.Entity<RuleSet>().Property(e => e.Description).HasColumnType("varchar").HasMaxLength(1000);

            //Strategy
            modelBuilder.Entity<Strategy>().HasKey(e => e.StrategyId);
            modelBuilder.Entity<Strategy>().Property(e => e.Name).IsRequired().HasColumnType("varchar").HasMaxLength(255);

            //ScheduledJob
            modelBuilder.Entity<ScheduledJob>().HasKey(e => e.JobId);

            //ScheduledJobDetails
            modelBuilder.Entity<ScheduledJobDetails>().HasKey(e => new { e.JobId, e.Ticker });
            modelBuilder.Entity<ScheduledJobDetails>().Property(e => e.Ticker).IsRequired().HasColumnType("varchar").HasMaxLength(50);

            //Strategy
            modelBuilder.Entity<GlobalIndicator>().HasKey(e => new { e.IndicatorId, e.SectorId });

            //IndicatorIntermediateResult
            modelBuilder.Entity<IndicatorIntermediateResult>().HasKey(e => e.Id);

            //ProcessorLog
            modelBuilder.Entity<ProcessorLog>().HasKey(e => e.Id);

            //ChartIndicator
            modelBuilder.Entity<ChartIndicator>().HasKey(e => e.Id);

            //ChartLayout
            modelBuilder.Entity<ChartLayout>().HasKey(e => e.LayoutId);

            //ChartLayout
            modelBuilder.Entity<ChartLayoutPeriod>().HasKey(e => e.Id);

            //ChartPlot
            modelBuilder.Entity<ChartPlot>().HasKey(e => e.PlotId);

            modelBuilder.Entity<Article>().HasKey(t => t.ArticleId);
            modelBuilder.Entity<Article>().HasRequired(a => a.Category).WithMany(t => t.Articles).HasForeignKey(p => p.CategoryId);
            modelBuilder.Entity<Article>().Property(a => a.ArticleId).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<Article>().Property(a => a.Title).IsRequired().HasMaxLength(250);
            modelBuilder.Entity<Article>().Property(a => a.Url).IsRequired().HasMaxLength(250);

            modelBuilder.Entity<Category>().HasKey(t => t.CategoryId);
            modelBuilder.Entity<Category>().Property(a => a.CategoryId).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<Category>().Property(a => a.Title).IsRequired().HasMaxLength(250);
            modelBuilder.Entity<Category>().Property(a => a.Url).IsRequired().HasMaxLength(250);
            modelBuilder.Entity<Category>().HasRequired(a => a.Section).WithMany(t => t.Categories).HasForeignKey(p => p.SectionId);

            modelBuilder.Entity<Section>().HasKey(t => t.SectionId);
            modelBuilder.Entity<Section>().Property(a => a.SectionId).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<Section>().Property(a => a.Title).IsRequired().HasMaxLength(250);
            modelBuilder.Entity<Section>().Property(a => a.Url).IsRequired().HasMaxLength(250);

            modelBuilder.Entity<CompanySector>().HasKey(t => t.SectorId);
            modelBuilder.Entity<CompanySector>().Property(a => a.SectorName).IsRequired().HasMaxLength(250);

            modelBuilder.Entity<vRuleSet>().HasKey(t => new { t.RuleId, t.RuleSetId });
            modelBuilder.Entity<vStrategy>().HasKey(t => new { t.StrategyId, t.RuleSetId });
            modelBuilder.Entity<vStrategyRuleSet>().HasKey(t => new { t.StrategyId, t.RuleSetId });

            modelBuilder.Entity<vStrategyRule>().HasKey(t => new { t.StrategyId, t.RuleSetId, t.RuleId });

            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Company> Companies { get; set; }
        public DbSet<Indicator> Indicators { get; set; }
        public DbSet<CompanyIndicator> CompanyIndicators { get; set; }
        public DbSet<CompanyRuleSet> CompanyRuleSets { get; set; }
        public DbSet<Rule> Rules { get; set; }
        public DbSet<RuleSet> RuleSets { get; set; }
        public DbSet<RuleSetDetails> RuleSetDetails { get; set; }
        public DbSet<Strategy> Strategies { get; set; }
        public DbSet<StrategyRuleSet> StrategyRuleSets { get; set; }
        public DbSet<Article> Articles { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Section> Sections { get; set; }
        public DbSet<CompanySector> Sectors { get; set; }
        public DbSet<CompanyIndustry> Inductries { get; set; }
        public virtual DbSet<vRuleSet> vRuleSets { get; set; }
        public virtual DbSet<vStrategy> vStrategies { get; set; }
        public virtual DbSet<vStrategyRuleSet> vStrategyRuleSets { get; set; }
        public virtual DbSet<vStrategyRule> vStrategyRules { get; set; }
        public virtual DbSet<GlobalIndicator> GlobalIndicators { get; set; }
        public virtual DbSet<ScheduledJob> ScheduledJobs { get; set; }
        public virtual DbSet<IndicatorIntermediateResult> IndicatorIntermediateResults { get; set; }
        public virtual DbSet<ScheduledJobDetails> ScheduledJobDetail { get; set; }
        public virtual DbSet<ProcessorLog> ProcessorLogs { get; set; }
        public virtual DbSet<ChartIndicator> ChartIndicators { get; set; }
        public virtual DbSet<ChartLayout> ChartLayouts { get; set; }
        public virtual DbSet<ChartLayoutPeriod> ChartLayoutPeriods { get; set; }
        public virtual DbSet<ChartPlot> ChartPlots { get; set; }
    }
}
