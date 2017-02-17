using System.Collections.Generic;
using System.Linq;
using Dream.Space.Data.Entities.Companies;
using Dream.Space.Data.Models;

namespace Dream.Space.Data.Repositories
{
    public class CompanyIndicatorRepository : DreamDbRepository<CompanyIndicator>, ICompanyIndicatorRepository
    {
        public CompanyIndicatorRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public List<CompanyToProcess> FindCompaniesToProcess(int maxCompanyCount)
        {
            /*
            SELECT DISTINCT C.Ticker, C.HistoryQuotesJson
            FROM dbo.CompanyIndicator CI 
	            INNER JOIN dbo.Company C ON CI.Ticker = C.Ticker
            WHERE CI.LastUpdated < C.LastUpdated
            */

            throw new System.NotImplementedException();
        }

        public List<CompanyIndicator> Get(string ticker)
        {
            var records = Dbset
                .Where(c => c.Ticker == ticker)
                .ToList();

            return records;
        }

        public CompanyIndicator Get(string ticker, int indicatorId)
        {
            var record = Dbset.FirstOrDefault(c => c.Ticker == ticker && c.IndicatorId == indicatorId);

            return record;
        }
    }
}