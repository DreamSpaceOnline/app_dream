using Dream.Space.Models.Quotes;
using Dream.Space.Reader.Models;
using Dream.Space.Reader.Validators;

namespace Dream.Space.Reader
{
    public class QuotesFileReader : FileReader<QuotesReaderModelMap, StockQuote>, IQuotesFileReader
    {

        public QuotesFileReader(FileReaderConfiguration configuration, IFileReaderValidator validator)
            : base(configuration, validator)
        {
        }

    }
}