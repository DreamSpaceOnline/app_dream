using System.Collections.Generic;

namespace Dream.Space.Data.Entities.Companies
{
    public class CompanySector
    {
        public int SectorId { get; set; }
        public string SectorName { get; set; }

        public List<CompanyIndustry> Industries { get; set; }
    }
}
