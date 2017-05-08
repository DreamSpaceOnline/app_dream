using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Indicators;

namespace Dream.Space.Data.Repositories
{
    public interface IIndicatorRepository
    {
        Indicator Get(int id);
        List<Indicator> GetAll();
        Indicator Add(Indicator indicator);
        void Commit();
        Task<Indicator> GetAsync(int id);
        void Delete(Indicator record);
        Task CommitAsync();
        Task<List<Indicator>> GetAllAsync(QuotePeriod period);
        Task<List<Indicator>> GetAllAsync();
        Task<List<Indicator>> GetByStrategyIdAsync(int id);
        List<Indicator> GetGlobalAll();
        Task<IList<IIndicatorEntity>> GetIndicatorsForLayoutAsync(int layoutId);
        Task<IList<IIndicatorEntity>> GetLayoutIndicatorsForPeriodAsync(QuotePeriod period);
    }


    public class IndicatorRepository : DreamDbRepository<Indicator>, IIndicatorRepository
    {
        public IndicatorRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public Indicator Get(int id)
        {
            var record = Dbset.FirstOrDefault(r => r.IndicatorId == id);
            return record;
        }

        public List<Indicator> GetAll()
        {
            var indicators = Dbset.Where(i => !i.Deleted && !i.Global).ToList();
            return indicators;
        }

        public async Task<List<Indicator>> GetAllAsync()
        {
            var records = await Dbset.Where(i => !i.Deleted && !i.Global).OrderBy(r => r.Name).ToListAsync();
            return records;
        }

        public async Task<List<Indicator>> GetAllAsync(QuotePeriod period)
        {
            var records = await Dbset.Where(r => r.Period == period && !r.Deleted && !r.Global).OrderBy(r => r.Name).ToListAsync();
            return records;
        }

        public async Task<Indicator> GetAsync(int id)
        {
            var record = await Dbset.FirstOrDefaultAsync(r => r.IndicatorId == id);
            return record;
        }

        public async Task<List<Indicator>> GetByStrategyIdAsync(int id)
        {
            const string query = @"
                SELECT DISTINCT I.*
                FROM [dbo].[Indicator] I
	                INNER JOIN (
		                SELECT [DataSeriesV1] AS IndicatorId, [RuleId]
		                FROM [dbo].[Rule]
		                WHERE [DataSourceV1] = 0
		                UNION

		                SELECT [DataSeriesV2], [RuleId]
		                FROM [dbo].[Rule]
		                WHERE [DataSourceV2] = 0
	                ) R ON I.IndicatorId = R.IndicatorId
	                INNER JOIN [dbo].[RuleSetDetails] RS ON RS.RuleId = R.RuleId
	                INNER JOIN [dbo].[StrategyRuleSet] S ON S.RuleSetId = RS.RuleSetId
                WHERE I.Deleted = 0 AND S.StrategyId = @strategyId
            ";

            var records = await Dbset.SqlQuery(query, new[] { new SqlParameter("@strategyId", id) }).ToListAsync();
            return records;
        }


        public List<Indicator> GetGlobalAll()
        {
            var indicators = Dbset.Where(i => !i.Deleted && i.Global).ToList();
            return indicators;
        }

        public async Task<IList<IIndicatorEntity>> GetIndicatorsForLayoutAsync(int layoutId)
        {
            const string query = @"
                SELECT I.*
                FROM dbo.Indicator I
	                INNER JOIN dbo.LayoutIndicator LI
		                ON LI.IndicatorId = I.IndicatorId
	                INNER JOIN dbo.ChartPlot P 
		                ON LI.PlotId = P.PlotId
                WHERE P.LayoutId = @LayoutId
	                AND	I.Deleted = 0 ";

            var records = await Dbset.SqlQuery(query, new object[] { new SqlParameter("@PlotId", layoutId) }).ToListAsync();

            return records.Select(r => r as IIndicatorEntity).ToList();
        }

        public async Task<IList<IIndicatorEntity>> GetLayoutIndicatorsForPeriodAsync(QuotePeriod period)
        {
            const string query = @"
              SELECT I.*
                FROM dbo.Indicator I
	                INNER JOIN dbo.LayoutIndicator LI 
		                ON LI.IndicatorId = I.IndicatorId
					INNER JOIN dbo.ChartLayout L 
						ON L.PlotId = LI.PlotId
                WHERE   L.Deleted = 0 
                    AND	I.Deleted = 0 
                    AND	I.Period = @Period ";

            var records = await Dbset.SqlQuery(query, new object[] { new SqlParameter("@Period", (int)period) }).ToListAsync();

            return records.Select(r => r as IIndicatorEntity).ToList();
        }
    }
}