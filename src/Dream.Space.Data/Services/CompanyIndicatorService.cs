using System;
using System.Collections.Generic;
using Autofac;
using Dream.Space.Data.Entities.Companies;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Enums;
using Dream.Space.Data.Models;
using Dream.Space.Data.Repositories;

namespace Dream.Space.Data.Services
{
    public class CompanyIndicatorService : ICompanyIndicatorService
    {
        private readonly ILifetimeScope _container;

        public CompanyIndicatorService(ILifetimeScope container)
        {
            _container = container;
        }

        public List<CompanyToProcess> FindCompaniesToProcess(int maxCompanyCount)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ICompanyRepository>();
                var companies = repository.FindCompaniesToCalculate(maxCompanyCount);
                return companies;
            }
        }

        public List<Indicator> GetRegisteredIndicators()
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IIndicatorRepository>();
                var indicators = repository.GetAll();
                return indicators;
            }
        }

        public void Update(string ticker, string jsonData, Indicator indicator)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ICompanyIndicatorRepository>();
                var ci = repository.Get(ticker, indicator.IndicatorId) ?? repository.Add(new CompanyIndicator());

                ci.IndicatorId = indicator.IndicatorId;
                ci.Ticker = ticker;
                ci.LastUpdated = DateTime.Now;
                ci.JsonData = jsonData;

                repository.Commit();
            }
        }

        public List<CompanyIndicator> GetIndicators(string ticker)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ICompanyIndicatorRepository>();
                var indicators = repository.Get(ticker);
                return indicators;
            }
        }

        public List<Indicator> RegisterCommonIndicators()
        {
            var indicators = new List<Indicator>
            {
                new Indicator{ Name = "EMA", Params = new List<IndicatorParam> {new IndicatorParam {ParamName = IndicatorParamName.Period.ToString(), Value = 13} }, Period = QuotePeriod.Daily, LastUpdated = DateTime.Now},
                new Indicator{ Name = "EMA", Params = new List<IndicatorParam> {new IndicatorParam {ParamName = IndicatorParamName.Period.ToString(), Value = 26} }, Period = QuotePeriod.Daily, LastUpdated = DateTime.Now},
                new Indicator{ Name = "EMA", Params = new List<IndicatorParam> {new IndicatorParam {ParamName = IndicatorParamName.Period.ToString(), Value = 13} }, Period = QuotePeriod.Weekly, LastUpdated = DateTime.Now},
                new Indicator{ Name = "EMA", Params = new List<IndicatorParam> {new IndicatorParam {ParamName = IndicatorParamName.Period.ToString(), Value = 26} }, Period = QuotePeriod.Weekly, LastUpdated = DateTime.Now},
            };

            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IIndicatorRepository>();
                indicators.ForEach(i => repository.Add(i));
                repository.Commit();
            }

            return indicators;
        }
    }
}