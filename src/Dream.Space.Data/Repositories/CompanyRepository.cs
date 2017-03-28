﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Companies;
using Dream.Space.Models.Companies;

namespace Dream.Space.Data.Repositories
{
    public interface ICompanyRepository : IDreamDbRepository<Company>
    {
        Company Get(string ticker);
        List<CompanyToUpdate> FindCompaniesForUpdate(TimeSpan fromTimeAgo, int count);
        List<CompanyToProcess> FindCompaniesToCalculate(int maxCompanyCount);
        Task<List<CompanyDetails>> SearchAsync(string ticker, int maxCount);
        Task<CompanyHeader> GetAsync(string ticker);
        List<CompanyToUpdate> FindCompaniesForJob(string requestJobId, int maxRecordCount, int sectorId);
        void CompleteJob(string jobId, IList<string> tickers);
    }


    public class CompanyRepository : DreamDbRepository<Company>, ICompanyRepository
    {
        public CompanyRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public Company Get(string ticker)
        {
            var record = Dbset.FirstOrDefault(r => r.Ticker == ticker);
            return record;
        }

        public List<CompanyToUpdate> FindCompaniesForUpdate(TimeSpan fromTimeAgo, int count)
        {
            var fromDate = DateTime.Now.Subtract(fromTimeAgo).Date;
            var records = Dbset.Where(c => c.Filtered && c.LastUpdated < fromDate)
                .Select(c => new CompanyToUpdate
                {
                    Ticker = c.Ticker,
                    LastUpdated = c.LastUpdated,
                    HistoryQuotesJson = c.HistoryQuotesJson
                })
                .OrderBy(c => c.Ticker)
                .Take(count)
                .ToList();

            return records;
        }


        public List<CompanyToProcess> FindCompaniesToCalculate(int maxCompanyCount)
        {
            var sql = $@"
                SELECT TOP {maxCompanyCount}  C.*
                FROM dbo.Company C
                WHERE C.LastCalculated < C.LastUpdated AND C.Filtered = 1";

            var companies = Dbset.SqlQuery(sql)
                .Select(c =>
                new CompanyToProcess
                {
                    Ticker = c.Ticker,
                    LastCalculated = c.LastCalculated,
                    LastUpdated = c.LastUpdated,
                    QuotesJson = c.HistoryQuotesJson
                }).ToList();

            return companies;
        }

        public async Task<List<CompanyDetails>> SearchAsync(string ticker, int maxCount)
        {
            var records = await Dbset
                            .Where(c => c.Filtered && c.Ticker.StartsWith(ticker))
                            .OrderBy(c => c.Ticker)
                            .Take(maxCount)
                            .Select(c =>
                                new CompanyDetails
                                {
                                    Ticker = c.Ticker,
                                    Name = c.Name,
                                    LastUpdated = c.LastUpdated,
                                    Sector = c.Sector,
                                    Industry = c.Industry,
                                    SummaryUrl = c.SummaryUrl,
                                    Volume = c.Volume,
                                    Price = c.Price,
                                    HighestPrice52 = c.HighestPrice52,
                                    LowestPrice52 = c.LowestPrice52,
                                    ChaosPercentage = c.ChaosPercentage,
                                    UpdateSuccessful = c.UpdateSuccessful
                            })
                            .ToListAsync();

            return records;
        }

        public async Task<CompanyHeader> GetAsync(string ticker)
        {
            var record = await Dbset.Where(r => r.Ticker == ticker).FirstOrDefaultAsync();
            return new CompanyHeader(record);
        }

        public List<CompanyToUpdate> FindCompaniesForJob(string jobId,  int count, int sectorId)
        {
            var records = Dbset.Where(c => (c.SectorId == sectorId || sectorId == 0) && c.Filtered && (c.SP500 || sectorId > 0) && c.LastJobId != jobId)
                .Select(c => new CompanyToUpdate
                {
                    Ticker = c.Ticker,
                    LastUpdated = c.LastUpdated,
                    HistoryQuotesJson = c.HistoryQuotesJson
                })
                .OrderBy(c => c.Ticker)
                .Take(count)
                .ToList();

            return records;
        }

        public void CompleteJob(string jobId, IList<string> tickerList)
        {
            var tickers = string.Join(",", tickerList.Select(t => $"'{t}'").ToArray());

            var sql = $@"
                UPDATE  C
                    SET LastJobId = '{jobId}'
                FROM dbo.Company C
                WHERE Ticker IN ({tickers})";


            DbContext.Database.ExecuteSqlCommand(sql);
        }
    }
}
