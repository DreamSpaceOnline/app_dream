using System;
using System.Diagnostics;
using System.IO;
using Dream.Space.Data.Services;
using Dream.Space.Reader;

namespace Dream.Space.Jobs
{
    public class CompanyImportJob: ICompanyImportJob
    {
        private readonly ICompanyManagerService _companyService;
        private readonly ICompanyFileReader _fileReader;

        public CompanyImportJob(ICompanyManagerService companyService, ICompanyFileReader fileReader)
        {
            _companyService = companyService;
            _fileReader = fileReader;
        }

        public void Start()
        {
            var directoryInfo = Directory.GetParent(Environment.CurrentDirectory).Parent;
            if (directoryInfo != null)
            {
                string folder = directoryInfo.FullName;
                var path = Path.Combine(folder, "Data");
                var csvFiles = Directory.GetFiles(path, "*.csv");

                foreach (var csvFile in csvFiles)
                {
                    ImportCsv(csvFile);
                }
            }
        }

        private void ImportCsv(string csvFile)
        {
            try
            {
                var list = _fileReader.Read(csvFile);
                foreach (var company in list)
                {
                    if (company.IsActive > 0)
                    {
                        try
                        {
                            var manager = _companyService.CreateManager(company);
                            manager.Import();
                            Console.WriteLine("Imported: " + company.Ticker);

                        }
                        catch (Exception e)
                        {
                            Debug.WriteLine(e.ToString());
                        }
                    }
                }

            }
            catch (Exception e)
            {
                Debug.WriteLine(e.ToString());
            }
        }
    }

    public interface ICompanyImportJob : IJob
    {
        
    }
}
