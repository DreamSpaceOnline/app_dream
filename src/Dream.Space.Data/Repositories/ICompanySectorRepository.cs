using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Companies;

namespace Dream.Space.Data.Repositories
{
    public interface ICompanySectorRepository
    {
        List<CompanySector> GetAll();
        CompanySector Add(CompanySector companySector);
        CompanySector Get(int id);
        void Commit();
    }

    public class CompanySectorRepository : DreamDbRepository<CompanySector>, ICompanySectorRepository
    {
        public CompanySectorRepository(DreamDbContext dbContext) : base(dbContext)
        {
        }

        public List<CompanySector> GetAll()
        {
            var records = Dbset.OrderBy(s => s.SectorName).ToList();
            return records;
        }


        public CompanySector Get(int id)
        {
            var record = Dbset.FirstOrDefault(s => s.SectorId == id);
            return record;
        }

    }
}
