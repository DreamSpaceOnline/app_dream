using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dream.Space.Data.Entities.Companies
{
    public class CompanySector
    {
        public int SectorId { get; set; }
        public string SectorName { get; set; }

        public List<CompanyInductry> Industries { get; set; }
    }
}
