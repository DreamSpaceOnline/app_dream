using Autofac;
using Dream.Space.Calculators;
using Dream.Space.Calculators.IndicatorProcessor;
using Dream.Space.Data;
using Dream.Space.Data.Repositories;
using Dream.Space.Data.Services;
using Dream.Space.Import.Jobs;
using Dream.Space.Models.Calculators;
using Dream.Space.Reader;
using Dream.Space.Reader.Validators;
using Dream.Space.Stock;
using Dream.Space.Stock.Nasdaq.Client;
using Dream.Space.Stock.Yahoo.Client;

namespace Dream.Space.Import
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

            builder.RegisterType<CompanyFileReader>().As<ICompanyFileReader>().InstancePerDependency();
            builder.RegisterType<QuotesFileReader>().As<IQuotesFileReader>().InstancePerDependency();
            builder.RegisterType<FileReaderValidator>().As<IFileReaderValidator>().InstancePerDependency();
            builder.RegisterType<CompanyRepository>().As<ICompanyRepository>().InstancePerDependency();
            builder.RegisterType<IndicatorRepository>().As<IIndicatorRepository>().InstancePerDependency();
            builder.RegisterType<CompanyIndicatorRepository>().As<ICompanyIndicatorRepository>().InstancePerDependency();
            builder.RegisterType<CompanySectorRepository>().As<ICompanySectorRepository>().InstancePerDependency();
            builder.RegisterType<GlobalIndicatorRepository>().As<IGlobalIndicatorRepository>().InstancePerDependency();

            builder.RegisterType<CompanyManagerService>().As<ICompanyManagerService>().As<ICompanyService>().InstancePerDependency();
            builder.RegisterType<CompanyIndicatorService>().As<ICompanyIndicatorService>().InstancePerDependency();
            builder.RegisterType<GlobalIndicatorService>().As<IGlobalIndicatorService>().InstancePerDependency();
            builder.RegisterType<FileReaderConfiguration>().SingleInstance();
            builder.RegisterType<DreamDbContext>().InstancePerDependency();
            builder.RegisterType<CompanyImportJob>().As<IJob>().As<ICompanyImportJob>();
            builder.RegisterType<QuotesImportJob>().As<IJob>().As<IQuotesImportJob>();
            builder.RegisterType<GlobalIndicatorsProcessJob>().As<IJob>().As<IGlobalIndicatorsProcessJob>();
            builder.RegisterType<IndicatorProcessorFactory>().SingleInstance();
            builder.RegisterType<IndicatorService>().As<IIndicatorService>();

            builder.Register(c => new NasdaqStockClientConfig { Proxy = "" }).SingleInstance();
            builder.Register(c => new YahooFinanceClientConfig() { Proxy = "" }).SingleInstance();
            builder.RegisterType<YahooFinanceClient>().As<IMarketStockClient>();


            builder.RegisterType<EMACalculator>().As<IIndicatorCalculator>();
            builder.RegisterType<ForceIndexCalculator>().As<IIndicatorCalculator>();
            builder.RegisterType<MACDCalculator>().As<IIndicatorCalculator>();
            builder.RegisterType<ImpulseSystemCalculator>().As<IIndicatorCalculator>();
            builder.RegisterType<NHNLCalculator>().As<IIndicatorCalculator>();

            return builder.Build();
        }
    }
}
