using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data;
using Dream.Space.Data.Repositories;
using Dream.Space.Data.Services;
using Dream.Space.Import.CompanyImport;
using Dream.Space.Import.QuotesImport;
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

            builder.RegisterType<CompanyManagerService>().As<ICompanyManagerService>().As<ICompanyService>().InstancePerDependency();
            builder.RegisterType<CompanyIndicatorService>().As<ICompanyIndicatorService>().InstancePerDependency();
            builder.RegisterType<FileReaderConfiguration>().SingleInstance();
            builder.RegisterType<DreamDbContext>().InstancePerDependency();
            builder.RegisterType<CompanyImportJob>().As<IJob>().As<ICompanyImportJob>();
            builder.RegisterType<QuotesImportJob>().As<IJob>().As<IQuotesImportJob>();

            builder.Register(c => new NasdaqStockClientConfig { Proxy = "" }).SingleInstance();
            builder.Register(c => new YahooFinanceClientConfig() { Proxy = "" }).SingleInstance();
            builder.RegisterType<YahooFinanceClient>().As<IMarketStockClient>();

            return builder.Build();
        }
    }
}
