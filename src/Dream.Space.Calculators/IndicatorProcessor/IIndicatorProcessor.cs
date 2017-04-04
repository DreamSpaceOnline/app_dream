using System.Collections.Generic;
using System.Linq;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Services;
using Dream.Space.Models.Quotes;
using Newtonsoft.Json;

namespace Dream.Space.Calculators.IndicatorProcessor
{
    public interface IIndicatorProcessor
    {
        void Process(string companyTicker, List<QuotesModel> quotes);
    }

    public class IndicatorProcessor : IIndicatorProcessor
    {
        private readonly ICompanyIndicatorService _companyIndicatorService;
        private readonly CalculatorFactory _processorFactory;
        private List<Indicator> _indicators;

        public IndicatorProcessor(ICompanyIndicatorService companyIndicatorService, CalculatorFactory processorFactory)
        {
            _companyIndicatorService = companyIndicatorService;
            _processorFactory = processorFactory;
            Initialize();
        }

        private void Initialize()
        {
            _indicators = _companyIndicatorService.GetRegisteredIndicators();
            if (!_indicators.Any())
            {
                _indicators = _companyIndicatorService.RegisterCommonIndicators();
            }
        }

        public void Process(string ticker, List<QuotesModel> quotes)
        {
           // var companyIndicators = _companyIndicatorService.GetIndicators(ticker);
            foreach (var indicator in _indicators)
            {
                var processor = _processorFactory.Create(indicator);
                var data = processor?.Calculate(indicator, quotes);

                if (data != null && data.Any())
                {
                    _companyIndicatorService.Update(ticker, JsonConvert.SerializeObject(data), indicator);
                }
            }
        }
    }
}