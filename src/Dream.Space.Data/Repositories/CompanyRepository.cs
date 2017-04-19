using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Companies;
using Dream.Space.Models.Companies;

namespace Dream.Space.Data.Repositories
{
    public interface ICompanyRepository : IDreamDbRepository<Company>
    {
        Company Get(string ticker);
        List<CompanyQuotesModel> FindCompaniesForUpdate(TimeSpan fromTimeAgo, int count);
        List<CompanyToProcess> FindCompaniesToCalculate(int maxCompanyCount);
        Task<List<CompanyDetails>> SearchAsync(string ticker, int maxCount);
        Task<CompanyHeader> GetAsync(string ticker);
        Task<List<CompanyQuotesModel>> FindCompaniesForJobAsync(string requestJobId, int maxRecordCount, int sectorId, bool sp500, bool isIndex);
        Task<int> GetSP500CountAsync();
        Task<int> GetCountAsync(int sectorId);
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

        public List<CompanyQuotesModel> FindCompaniesForUpdate(TimeSpan fromTimeAgo, int count)
        {
            var fromDate = DateTime.Now.Subtract(fromTimeAgo).Date;
            var records = Dbset.Where(c => c.Filtered && c.LastUpdated < fromDate)
                .Select(c => new CompanyQuotesModel
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

        //TODO:
        public async Task<List<CompanyQuotesModel>> FindCompaniesForJobAsync(string jobId, int count, int sectorId, bool sp500, bool isIndex)
        {
            var query = $@"
                SELECT TOP {count} C.* 
                FROM [dbo].[Company] C
                LEFT JOIN [dbo].[ScheduledJobDetails] J
	                ON C.Ticker = J.Ticker AND J.JobId = @JobId

                WHERE C.Filtered = 1
	                AND (C.SectorId = @SectorId OR @SectorId = 0)
	                AND (C.SP500 = 1 OR @SP500 = 0)
	                AND J.JobId IS NULL";

            if (isIndex)
            {
                query = $@"
                SELECT TOP {count} C.* 
                FROM [dbo].[Company] C
                LEFT JOIN [dbo].[ScheduledJobDetails] J
	                ON C.Ticker = J.Ticker AND J.JobId = @JobId

                WHERE C.Filtered = 1
	                AND (C.IsIndex = 1)
	                AND (@SectorId = 0)
	                AND (@SP500 = 0)
                    AND J.JobId IS NULL";
            }

            var records = await Dbset.SqlQuery(query, 
                new SqlParameter("@JobId", jobId), 
                new SqlParameter("@SectorId", sectorId),
                new SqlParameter("@SP500", sp500)
            ).ToListAsync();

            return records.Select(c =>
                new CompanyQuotesModel
                {
                    Ticker = c.Ticker,
                    LastUpdated = c.LastUpdated,
                    HistoryQuotesJson = c.HistoryQuotesJson
                }).ToList();
        }

        public async Task<int> GetSP500CountAsync()
        {
            var count = await Dbset.CountAsync(c => c.SP500 && c.Filtered);
            return count;
        }

        public async Task<int> GetCountAsync(int sectorId)
        {
            var count = await Dbset.CountAsync(c => c.Filtered && (c.SectorId == sectorId || sectorId == 0));
            return count;
        }
    }
}
