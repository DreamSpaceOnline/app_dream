using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Companies;
using Dream.Space.Data.Managers;
using Dream.Space.Data.Requests;
using Dream.Space.Models.Companies;
using Dream.Space.Models.Quotes;

namespace Dream.Space.Data.Services
{
    public interface ICompanyService : ICompanyManagerService
    {
        CompanyModel Register(CompanyModel company);
        CompanyModel Get(string ticker);
        List<CompanyQuotesModel> FindCompaniesForUpdate(FindCompaniesForUpdateRequest request);
        void UpdateQuotes(UpdateQuotesRequest request);
        List<QuotesModel> GetQuotes(string ticker);
        void SetLastCalculated(string ticker);
        void UpdateMetricsFailed(UpdateMetricsFailedRequest updateMetricsFailedRequest);

        Task<List<CompanyHeader>> SearchAsync(CompanySearchRequest request);
        Task<CompanyModel> GetAsync(string ticker);
        Task<List<CompanyQuotesModel>> FindCompaniesForJob(FindCompaniesForJobRequest findRequest);
        List<CompanySector> GetCompanySectors();
        void MarkAsSP500(CompanyModel company);
        Task<int> GetSP500CountAsync();
        Task<int> GetTotalCountAsync();
    }

    public interface ICompanyManagerService 
    {
        CompanyManager CreateManager(CompanyModel company);
    }
}