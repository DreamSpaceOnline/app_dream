using System;
using System.Linq;
using Dream.Space.Data.Models;
using Dream.Space.Data.Requests;
using Dream.Space.Data.Services;

namespace Dream.Space.Import.Jobs
{
    public class GlobalIndicatorsProcessJob : IGlobalIndicatorsProcessJob
    {
        private readonly ICompanyService _companyService;
        private readonly IIndicatorService _indicatorService;

        public GlobalIndicatorsProcessJob(ICompanyService companyService, IIndicatorService indicatorService)
        {
            _companyService = companyService;
            _indicatorService = indicatorService;
        }

        public void Start()
        {
            var log = new Logger();

            try
            {
                var sectors = _companyService.GetCompanySectors();
                var indicators = _indicatorService.GetGlobalIndicators();

                foreach (var sector in sectors)
                {


                    var findRequest = new FindCompaniesForJobRequest()
                    {
                        JobId = Guid.NewGuid().ToString(),
                        MaxRecordCount = 10,
                        SectorId = sector.SectorId
                    };

                    var companies = _companyService.FindCompaniesForJob(findRequest);
                    while (companies != null && companies.Any())
                    {
                        foreach (var company in companies)
                        {
                            CalculateIndicators(company);
                        }
                        companies = _companyService.FindCompaniesForJob(findRequest);
                    }

                }
            }
            catch (Exception ex)
            {
                log.Error("FindCompaniesForJob", ex);
            }
        }

        private void CalculateIndicators(CompanyToUpdate company)
        {
            throw new NotImplementedException();
        }
    }

    public interface IGlobalIndicatorsProcessJob : IJob
    {
    }
}
