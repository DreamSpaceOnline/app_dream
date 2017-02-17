using System.Collections.Generic;
using Dream.Space.Reader.Models;

namespace Dream.Space.Reader
{
    public interface IQuotesFileReader
    {
        List<QuotesModel> Read(string filePath);
    }
}