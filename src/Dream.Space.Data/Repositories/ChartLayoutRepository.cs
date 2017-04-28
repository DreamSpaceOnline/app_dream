using System.Data.Entity;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Models.Indicators;

namespace Dream.Space.Data.Repositories
{
    public interface IChartLayoutRepository
    {
        Task<IChartLayoutEntity> GetAsync(int id);
    }


    public class ChartLayoutRepository : DreamDbRepository<ChartLayout>, IChartLayoutRepository
    {
        public ChartLayoutRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IChartLayoutEntity> GetAsync(int id)
        {
            var record = await Dbset.FirstOrDefaultAsync(r => r.LayoutId == id);
            return record;
        }

    }
}