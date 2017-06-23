using System.Data.Entity;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Journals;
using Dream.Space.Models.Journals;

namespace Dream.Space.Data.Repositories
{
    public interface IJournalRepository
    {
        Task<Journal> GetAsync(int id);
        Task<JournalModel> GetExtendedAsync(int id);
    }

    public class JournalRepository : DreamDbRepository<Journal>, IJournalRepository
    {
        public JournalRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }


        public async Task<Journal> GetAsync(int id)
        {
            var record = await Dbset.FirstOrDefaultAsync(r => r.JournalId == id);
            return record;
        }

        public async Task<JournalModel> GetExtendedAsync(int id)
        {
            const string query = @"
                SELECT J.*
                FROM [dbo].[Journal] J
                WHERE J.JournalId = @JournalId";


            var journal = await DbContext.Database.SqlQuery<JournalModel>(query,
                new SqlParameter("@JournalId", id)).FirstOrDefaultAsync();

            return journal;
        }
    }
}
