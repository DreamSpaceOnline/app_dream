using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data.Repositories;
using Dream.Space.Models.Journals;

namespace Dream.Space.Data.Services
{
    public interface IJournalService
    {
        Task<JournalModel> GetJournalAsync(int id);
    }

    public class JournalService : IJournalService
    {
        private readonly ILifetimeScope _container;

        public JournalService(ILifetimeScope container)
        {
            _container = container;
        }

        public async Task<JournalModel> GetJournalAsync(int id)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IJournalRepository>();
                var entity = await repository.GetExtendedAsync(id);
                return entity;
            }
        }
    }
}
