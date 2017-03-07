﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data.Entities.Companies;
using Dream.Space.Data.Managers;
using Dream.Space.Data.Models;
using Dream.Space.Data.Repositories;
using Dream.Space.Data.Requests;
using Dream.Space.Reader.Models;
using Newtonsoft.Json;

namespace Dream.Space.Data.Services
{
    public class CompanyManagerService : ICompanyService
    {
        private readonly ILifetimeScope _container;

        public CompanyManagerService(ILifetimeScope container)
        {
            _container = container;
        }

        public Company Register(CompanyModel company)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ICompanyRepository>();
                var record = repository.Get(company.Ticker);
                if (record == null)
                {
                    record = repository.Add(new Company());

                    record.Ticker = company.Ticker;
                    record.Name = company.Name;
                    record.Sector = company.Sector;
                    record.Industry = company.Industry;
                    record.SummaryUrl = company.SummaryUrl;

                    repository.Commit();
                }

                return record;
            }
        }

        public List<CompanyToUpdate> FindCompaniesForUpdate(FindCompaniesForUpdateRequest request)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ICompanyRepository>();
                var companies = repository.FindCompaniesForUpdate(request.FromTimeAgo, request.MaxRecordCount);
                return companies;
            }
        }

        public void UpdateQuotes(UpdateQuotesRequest request)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ICompanyRepository>();
                var company = repository.Get(request.Ticker);
                if (company != null)
                {
                    company.HistoryQuotesJson = request.JsonQuotes;
                    company.Volume = request.Volume;
                    company.Price = request.Price;
                    company.ChaosPercentage = request.ChaosPercentage;
                    company.HighestPrice52 = request.HighestHigh52;
                    company.LowestPrice52 = request.LowestLow52;
                    company.LastCalculated = request.CalculatedTime;
                    company.LastUpdated = DateTime.UtcNow;
                    company.UpdateSuccessful = string.IsNullOrWhiteSpace(request.ErrorMessage);
                    company.UpdateError = request.ErrorMessage;

                    repository.Commit();
                }
            }
        }


        public List<QuotesModel> GetQuotes(string ticker)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ICompanyRepository>();
                var company = repository.Get(ticker);
                if (company != null)
                {
                    return JsonConvert.DeserializeObject<List<QuotesModel>>(company.HistoryQuotesJson);
                }
                return null;
            }
        }

        public List<CompanyToProcess> FindCompaniesToProcess(CompaniesToProcessRequest request)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ICompanyRepository>();
                var companies = repository.FindCompaniesToProcess(request.FromTimeAgo, request.MaxRecordCount);
                return companies;
            }
        }

        public void SetLastCalculated(string ticker)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ICompanyRepository>();
                var company = repository.Get(ticker);
                if (company != null)
                {
                    company.LastCalculated = company.LastUpdated;

                    repository.Commit();
                }
            }
        }

        public void UpdateMetricsFailed(UpdateMetricsFailedRequest request)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ICompanyRepository>();
                var company = repository.Get(request.Ticker);
                if (company != null)
                {
                    company.LastCalculated = request.CalculatedTime;
                    company.CalculatedSuccessful = false;
                    company.CalculatedError = request.ErrorMessage;

                    repository.Commit();
                }
            }
        }

        public async Task<CompanyHeader> GetAsync(string ticker)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ICompanyRepository>();
                var company = await repository.GetAsync(ticker);

                return company;
            }
        }

        public async Task<List<CompanyDetails>> SearchAsync(CompanySearchRequest request)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ICompanyRepository>();
                var companies = await repository.SearchAsync(request.Ticker, request.MaxCount);
                return companies;
            }
        }


        public CompanyManager CreateManager(CompanyModel company)
        {
            return new CompanyManager(company, this);
        }

        public Company Get(string ticker)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ICompanyRepository>();
                var company = repository.Get(ticker);

                return company;
            }
        }
    }
}
