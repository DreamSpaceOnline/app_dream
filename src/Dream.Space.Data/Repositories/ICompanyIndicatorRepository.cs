using System.Collections.Generic;
using Dream.Space.Data.Entities.Companies;
using Dream.Space.Models.Companies;

namespace Dream.Space.Data.Repositories
{
    public interface ICompanyIndicatorRepository
    {
        List<CompanyToProcess> FindCompaniesToProcess(int maxCompanyCount);
        List<CompanyIndicator> Get(string ticker);
        CompanyIndicator Add(CompanyIndicator companyIndicator);
        CompanyIndicator Get(string ticker, int indicatorId);
        void Commit();
    }
}