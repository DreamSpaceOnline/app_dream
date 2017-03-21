using System.Collections.Generic;
using Dream.Space.Data.Entities.Companies;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Models;
using Dream.Space.Models.Companies;

namespace Dream.Space.Data.Services
{
    public interface ICompanyIndicatorService
    {
        List<CompanyToProcess> FindCompaniesToProcess(int maxCompanyCount);
        List<Indicator> GetRegisteredIndicators();
        void Update(string ticker, string jsonData, Indicator indicator);
        List<CompanyIndicator> GetIndicators(string ticker);
        List<Indicator> RegisterCommonIndicators();
    }
}