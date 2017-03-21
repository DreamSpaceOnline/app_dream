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
        public PlaygroundConfiguration(CompanyInfo company, List<QuotesModel> quotes, List<Indicator> indicators, IndicatorProcessorFactory indicatorProcessorFactory, int strategyId, List<vStrategyRule> rules)
        {
            Company = company;
            Quotes = quotes;
            Indicators = indicators;
            IndicatorProcessorFactory = indicatorProcessorFactory;
            StrategyId = strategyId;
            Rules = rules;
        }

        public CompanyInfo Company { get; private set; }
        public List<QuotesModel> Quotes { get; private set; }
        public List<Indicator> Indicators { get; private set; }
        public IndicatorProcessorFactory IndicatorProcessorFactory { get; private set; }
        public int StrategyId { get; }
        public List<vStrategyRule> Rules { get; private set; }
    }
}