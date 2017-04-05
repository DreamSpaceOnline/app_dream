using System.Data.Entity;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Indicators;

namespace Dream.Space.Data.Repositories
{
    public interface IIndicatorIntermediateResultsRepository
    {
        Task<IndicatorIntermediateResult> GetIntermediateResultsAsync(int jobId, int indicatorId);
        IndicatorIntermediateResult Add(IndicatorIntermediateResult item);
        Task CommitAsync();
        void Delete(IndicatorIntermediateResult entity);
    }


    public class IndicatorIntermediateResultsRepository : DreamDbRepository<IndicatorIntermediateResult>, IIndicatorIntermediateResultsRepository
    {
        public IndicatorIntermediateResultsRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IndicatorIntermediateResult> GetIntermediateResultsAsync(int jobId, int indicatorId)
        {
            var record = await Dbset.FirstOrDefaultAsync(r => r.JobId == jobId && r.IndicatorId == indicatorId);
            return record;
        }

    }
}