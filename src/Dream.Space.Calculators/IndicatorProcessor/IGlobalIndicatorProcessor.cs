using System.Collections.Generic;
using Dream.Space.Reader.Models;

namespace Dream.Space.Calculators.IndicatorProcessor
{
    public interface IGlobalIndicatorProcessor
    {
        void Calculate(List<QuotesModel> quotes, string companyTicker);
    }
}
