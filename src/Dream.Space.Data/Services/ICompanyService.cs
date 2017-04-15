using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Companies;
using Dream.Space.Data.Managers;
using Dream.Space.Data.Requests;
using Dream.Space.Models.Companies;
using Dream.Space.Models.Quotes;
using Dream.Space.Reader.Models;

namespace Dream.Space.Data.Services
{
    public interface ICompanyService : ICompanyManagerService
    {
        Company Register(CompanyModel company);
        Company Get(string ticker);
        List<CompanyQuotesModel> FindCompaniesForUpdate(FindCompaniesForUpdateRequest request);
        void UpdateQuotes(UpdateQuotesRequest request);
        List<QuotesModel> GetQuotes(string ticker);
        void SetLastCalculated(string ticker);
        void UpdateMetricsFailed(UpdateMetricsFailedRequest updateMetricsFailedRequest);

        Task<List<CompanyDetails>> SearchAsync(CompanySearchRequest request);
        Task<CompanyHeader> GetAsync(string ticker);
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