using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Layouts;

namespace Dream.Space.Data.Repositories
{
    public interface IChartPlotRepository
    {
        Task<ChartPlot> GetAsync(int id);
        Task<IList<ChartPlot>> GetAllAsync(int layoutId);
        ChartPlot Add(ChartPlot chartPlot);
        void Commit();
    }


    public class ChartPlotRepository : DreamDbRepository<ChartPlot>, IChartPlotRepository
    {
        public ChartPlotRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<ChartPlot> GetAsync(int id)
        {
            var record = await Dbset.FirstOrDefaultAsync(r => r.PlotId == id);
            return record;
        }

        public async Task<IList<ChartPlot>> GetAllAsync(int layoutId)
        {
            var records = await Dbset.Where(r => r.LayoutId == layoutId).OrderBy(p => p.OrderId).ToListAsync();
            return records;
        }
    }
}