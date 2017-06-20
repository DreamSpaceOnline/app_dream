using Dream.Space.Reader.Models;
using Dream.Space.Reader.Validators;

namespace Dream.Space.Reader
{
    public class CompanyFileReader : FileReader<CompanyReaderModelMap, CompanyReaderModel>, ICompanyFileReader
    {

        public CompanyFileReader(FileReaderConfiguration configuration, IFileReaderValidator validator)
            : base(configuration, validator)
        {
        }

    }
}
