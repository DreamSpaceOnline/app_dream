using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Calculators.IndicatorProcessor;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Services;
using Dream.Space.Models.Quotes;
using Dream.Space.Playground.Models;

namespace Dream.Space.Playground
{
    public class PlaygroundConfigurationLoader
    {

        private CompanyInfo Company { get; set; }
        private List<QuotesModel> Quotes { get; set; }
        private List<Indicator> Indicators { get; set; }
        private CalculatorFactory CalculatorFactory { get; }


        private readonly IPlaygroundService _playgroundService;
        private readonly ICompanyService _companyService;

        public PlaygroundConfigurationLoader(IPlaygroundService playgroundService, ICompanyService companyService, CalculatorFactory calculatorFactory)
        {
            _playgroundService = playgroundService;
            _companyService = companyService;
            CalculatorFactory = calculatorFactory;
        }

        public async Task<PlaygroundConfiguration> Load(string ticker, int strategyId)
        {
            Indicators = await _playgroundService.LoadIndicatorsAsync(strategyId);
            var rules = await _playgroundService.LoadStrategyRulesAsync(strategyId);
            var company = _companyService.Get(ticker);
            Company = new CompanyInfo()
            {
                Ticker = company.Ticker,
                Name = company.Name
            };
            Quotes = company.HistoryQuotes;

            return new PlaygroundConfiguration(Company, Quotes, Indicators, CalculatorFactory, strategyId, rules);
        }
    }
}