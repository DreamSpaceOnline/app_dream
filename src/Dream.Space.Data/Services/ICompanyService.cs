using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Companies;
using Dream.Space.Data.Managers;
using Dream.Space.Data.Models;
using Dream.Space.Data.Requests;
using Dream.Space.Reader.Models;

namespace Dream.Space.Data.Services
{
    public interface ICompanyService : ICompanyManagerService
    {
        Company Register(CompanyModel company);
        Company Get(string ticker);
        List<CompanyToUpdate> FindCompaniesForUpdate(FindCompaniesForUpdateRequest request);
        void UpdateQuotes(UpdateQuotesRequest request);
        List<QuotesModel> GetQuotes(string ticker);
        void SetLastCalculated(string ticker);
        void UpdateMetricsFailed(UpdateMetricsFailedRequest updateMetricsFailedRequest);

        Task<List<CompanyDetails>> SearchAsync(CompanySearchRequest request);
        Task<CompanyHeader> GetAsync(string ticker);
        List<CompanyToUpdate> FindCompaniesForJob(FindCompaniesForJobRequest findRequest);
        List<CompanySector> GetCompanySectors();
    }

    public interface ICompanyManagerService 
    {
        CompanyManager CreateManager(CompanyModel company);
    }
}