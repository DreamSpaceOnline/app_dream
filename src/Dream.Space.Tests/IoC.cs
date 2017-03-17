using System.Configuration;
using Autofac;
using Dream.Space.Cache;
using Dream.Space.Calculators;
using Dream.Space.Calculators.IndicatorProcessor;
using Dream.Space.Controllers;
using Dream.Space.Data;
using Dream.Space.Data.Azure;
using Dream.Space.Data.Repositories;
using Dream.Space.Data.Services;
using Dream.Space.Indicators;
using Dream.Space.Models.Indicators;
using Dream.Space.Playground;
using Dream.Space.Reader;
using Dream.Space.Reader.Validators;
using Dream.Space.Stock;
using Dream.Space.Stock.Yahoo.Client;

namespace Dream.Space.Tests
{
    public class IoCContainer
    {
        private static ILifetimeScope _instance;

        private IoCContainer()
        {

        }

        public static ILifetimeScope Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new IoCContainer().Create();
                }
                return _instance;
            }
        }

        private ILifetimeScope Create()
        {
            var builder = new ContainerBuilder();

            builder.RegisterType<CompanyRepository>().As<ICompanyRepository>().InstancePerDependency();
            builder.RegisterType<ArticleRepository>().As<IArticleRepository>().InstancePerDependency();
            builder.RegisterType<CategoryRepository>().As<ICategoryRepository>().InstancePerDependency();
            builder.RegisterType<SectionRepository>().As<ISectionRepository>().InstancePerDependency();
            builder.RegisterType<IndicatorRepository>().As<IIndicatorRepository>().InstancePerDependency();
            builder.RegisterType<StrategyRepository>().As<IStrategyRepository>().InstancePerDependency();
            builder.RegisterType<CompanyIndicatorRepository>().As<ICompanyIndicatorRepository>().InstancePerDependency();
            builder.RegisterType<RuleRepository>().As<IRuleRepository>().InstancePerDependency();
            builder.RegisterType<RuleSetRepository>().As<IRuleSetRepository>().InstancePerDependency();
            builder.RegisterType<StrategyRuleSetRepository>().As<IStrategyRuleSetRepository>().InstancePerDependency();
            builder.RegisterType<CompanyRuleSetRepository>().As<ICompanyRuleSetRepository>().InstancePerDependency();
            builder.RegisterType<RuleSetDetailsRepository>().As<IRuleSetDetailsRepository>().InstancePerDependency();
            builder.RegisterType<VRuleSetRepository>().As<IVRuleSetRepository>().InstancePerDependency();
            builder.RegisterType<VStrategyRuleSetRepository>().As<IVStrategyRuleSetRepository>().InstancePerDependency();
            builder.RegisterType<VStrategyRuleRepository>().As<IVStrategyRuleRepository>().InstancePerDependency();

            builder.RegisterType<DreamDbContext>().InstancePerDependency();

            builder.RegisterType<ArticleService>().As<IArticleService>();
            builder.RegisterType<RuleService>().As<IRuleService>();
            builder.RegisterType<StrategyService>().As<IStrategyService>();
            builder.Register(c => new StorageAccountConfiguration
            {
                AccountName = ConfigurationManager.AppSettings["AzureStorageAccountName"],
                ConnectionString = ConfigurationManager.AppSettings["AzureStorageConnection"]
            }).SingleInstance();

            builder.RegisterType<AzureStorageClient>().As<IStorageClient>();
            builder.RegisterType<ArticleStorageService>().As<IArticleStorageService>();
            builder.RegisterType<IndicatorService>().As<IIndicatorService>();
            builder.RegisterType<RuleSetService>().As<IRuleSetService>();
            builder.RegisterType<PlaygroundService>().As<IPlaygroundService>();
            builder.RegisterType<CompanyManagerService>().As<ICompanyService>();
            builder.RegisterType<FileReaderConfiguration>().SingleInstance();
            builder.RegisterType<IndicatorProcessorFactory>().SingleInstance();
            builder.RegisterType<DataCache>().As<IDataCache>().SingleInstance();

            builder.Register(c => new YahooFinanceClientConfig() { Proxy = "" }).SingleInstance();
            builder.RegisterType<YahooFinanceClient>().As<IMarketStockClient>();
            builder.RegisterType<QuotesFileReader>().As<IQuotesFileReader>().InstancePerDependency();
            builder.RegisterType<FileReaderValidator>().As<IFileReaderValidator>().InstancePerDependency();
            builder.RegisterType<PlaygroundApiController>();
            builder.RegisterType<PlaygroundProcessor>();

            //Calculators
            builder.RegisterType<EMACalculator>().As<IIndicatorCalculator>();
            builder.RegisterType<ForceIndexCalculator>().As<IIndicatorCalculator>();
            builder.RegisterType<MACDCalculator>().As<IIndicatorCalculator>();
            builder.RegisterType<ImpulseSystemCalculator>().As<IIndicatorCalculator>();
            builder.RegisterType<NHNLCalculator>().As<IIndicatorCalculator>();

            builder.RegisterType<PlaygroundConfigurationLoader>();

            return builder.Build();
        }
    }
}
