using System.Collections.Generic;
using Dream.Space.Models.Quotes;

namespace Dream.Space.Reader
{
    public interface IQuotesFileReader
    {
        List<QuotesModel> Read(string filePath);
    }
}