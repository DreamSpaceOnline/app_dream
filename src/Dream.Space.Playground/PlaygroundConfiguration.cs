using System.Collections.Generic;
using Dream.Space.Calculators.IndicatorProcessor;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Entities.Strategies;
using Dream.Space.Models.Quotes;
using Dream.Space.Playground.Models;

namespace Dream.Space.Playground
{
    public class PlaygroundConfiguration
    {
        public PlaygroundConfiguration(CompanyInfo company, List<QuotesModel> quotes, List<Indicator> indicators, CalculatorFactory calculatorFactory, int strategyId, List<vStrategyRule> rules)
        {
            Company = company;
            Quotes = quotes;
            Indicators = indicators;
            CalculatorFactory = calculatorFactory;
            StrategyId = strategyId;
            Rules = rules;
        }

        public CompanyInfo Company { get; private set; }
        public List<QuotesModel> Quotes { get; private set; }
        public List<Indicator> Indicators { get; private set; }
        public CalculatorFactory CalculatorFactory { get; private set; }
        public int StrategyId { get; }
        public List<vStrategyRule> Rules { get; private set; }
    }
}