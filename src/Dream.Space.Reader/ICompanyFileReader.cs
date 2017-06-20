using System.Collections.Generic;
using Dream.Space.Reader.Models;

namespace Dream.Space.Reader
{
    public interface ICompanyFileReader
    {
        List<CompanyReaderModel> Read(string filePath);
    }
}