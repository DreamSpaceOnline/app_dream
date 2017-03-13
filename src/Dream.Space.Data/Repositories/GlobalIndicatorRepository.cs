using System.Data.Entity;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Entities.Strategies;

namespace Dream.Space.Data.Repositories
{
    public interface IGlobalIndicatorRepository
    {
        Task<GlobalIndicator> GetAsync(int sectorId, int indicatorId);
        GlobalIndicator Add(GlobalIndicator indicator);
        Task CommitAsync();
    }


    public class GlobalIndicatorRepository : DreamDbRepository<GlobalIndicator>, IGlobalIndicatorRepository
    {
        public GlobalIndicatorRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<GlobalIndicator> GetAsync(int sectorId, int indicatorId)
        {
            var record = await Dbset.FirstOrDefaultAsync(r => r.SectorId == sectorId && r.IndicatorId == indicatorId);
            return record;
        }
    }
}