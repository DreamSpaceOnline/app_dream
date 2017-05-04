using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Layouts;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Layourts;

namespace Dream.Space.Data.Repositories
{
    public interface ILayoutIndicatorRepository
    {
        Task<ILayoutIndicatorEntity> GetAsync(int id);
        Task<IList<ILayoutIndicatorEntity>> GetForLayoutAsync(int layoutId);
        Task<IList<ILayoutIndicatorEntity>> GetForPeriodAsync(QuotePeriod period);
    }


    public class LayoutIndicatorRepository : DreamDbRepository<LayoutIndicator>, ILayoutIndicatorRepository
    {
        public LayoutIndicatorRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<ILayoutIndicatorEntity> GetAsync(int id)
        {
            var record = await Dbset.FirstOrDefaultAsync(r => r.Id == id);
            return record;
        }

        public async Task<IList<ILayoutIndicatorEntity>> GetForLayoutAsync(int layoutId)
        {
            var records = await Dbset.Where(r => r.LayoutId == layoutId).ToListAsync();
            return records.Select(r => r as ILayoutIndicatorEntity).ToList();
        }

        public async Task<IList<ILayoutIndicatorEntity>> GetForPeriodAsync(QuotePeriod period)
        {
            const string query = @"
                SELECT I.*
                FROM dbo.Layout L
	                INNER JOIN dbo.LayoutIndicator I
		                ON L.LayoutId = I.LayoutId
                WHERE   L.Deleted = 0 
                    AND	L.Period = @Period ";

            var records = await Dbset.SqlQuery(query, new object[] { new SqlParameter("@Period", (int)period) }).ToListAsync();

            return records.Select(r => r as ILayoutIndicatorEntity).ToList();
        }
    }
}