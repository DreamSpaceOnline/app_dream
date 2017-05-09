using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Layouts;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Layouts;

namespace Dream.Space.Data.Repositories
{
    public interface IChartIndicatorRepository
    {
        Task<IChartIndicatorEntity> GetAsync(int id);
        Task<IChartIndicatorEntity> GetAsync(int layoutId, int indicatorId);
        Task<IList<IChartIndicatorEntity>> GetForLayoutAsync(int layoutId);
        Task<IList<IChartIndicatorEntity>> GetForPeriodAsync(QuotePeriod period);
        ChartIndicator Add(ChartIndicator chartIndicator);
        void Commit();
    }


    public class ChartIndicatorRepository : DreamDbRepository<ChartIndicator>, IChartIndicatorRepository
    {
        public ChartIndicatorRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IChartIndicatorEntity> GetAsync(int id)
        {
            var record = await Dbset.FirstOrDefaultAsync(r => r.Id == id);
            return record;
        }

        public async Task<IChartIndicatorEntity> GetAsync(int layoutId, int indicatorId)
        {
            var record = await Dbset.FirstOrDefaultAsync(r => r.PlotId == layoutId && r.IndicatorId == indicatorId);
            return record;
        }

        public async Task<IList<IChartIndicatorEntity>> GetForLayoutAsync(int layoutId)
        {
            const string query = @"
                SELECT I.*
                FROM dbo.ChartPlot P
	                INNER JOIN dbo.ChartIndicator I
		                ON I.PlotId = P.PlotId
                WHERE   P.LayoutId = @LayoutId  ";

            var records = await Dbset.SqlQuery(query, new object[] { new SqlParameter("@LayoutId", layoutId) }).ToListAsync();

            return records.Select(r => r as IChartIndicatorEntity).ToList();
        }

        public async Task<IList<IChartIndicatorEntity>> GetForPeriodAsync(QuotePeriod period)
        {
            const string query = @"
                SELECT I.*
                FROM dbo.ChartLayout L
	                INNER JOIN dbo.ChartIndicator I
		                ON L.PlotId = I.PlotId
                WHERE   L.Deleted = 0 
                    AND	L.Period = @Period ";

            var records = await Dbset.SqlQuery(query, new object[] { new SqlParameter("@Period", (int)period) }).ToListAsync();

            return records.Select(r => r as IChartIndicatorEntity).ToList();
        }
    }
}