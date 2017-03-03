using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Calculators.IndicatorProcessor;
using Dream.Space.Data.Entities.Companies;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Entities.Strategies;
using Dream.Space.Playground.Models;

namespace Dream.Space.Playground
{
    public class PlaygroundProcessor
    {
        private readonly List<Indicator> _indicators;
        private readonly PlaygroundModel _playgroundModel;


        public PlaygroundProcessor(Company company, List<Indicator> indicators, IndicatorProcessorFactory indicatorProcessorFactory, List<vStrategyRule> rules)
        {
            _indicators = indicators;
            _playgroundModel = new PlaygroundModel(company, indicatorProcessorFactory, rules);
            HistoryDays = company.HistoryQuotes.Count;
            Ticker = company.Ticker;
            if (rules.Any())
            {
                StrategyId = rules.First().StrategyId;
            }
        }

        public int HistoryDays { get; private set; }
        public string Ticker { get; private set; }
        public int StrategyId { get; private set; }


        public PlaygroundChartModel Initialize(int bars, DateTime date)
        {
            _playgroundModel.Initialize(bars, date, _indicators);
            return _playgroundModel.Build();
        }


        public PlaygroundChartModel Next(int bars)
        {
            var appendedQuotes = _playgroundModel.MoveNext(bars);
            var model = _playgroundModel.Build(new ChartUpdateMode(ChartUpdateMode.UpdateMode.Append, appendedQuotes));

            return model;
        }


        public PlaygroundChartModel Prev(int bars)
        {
            var insertedQuotes = _playgroundModel.MovePrev(bars);
            var model = _playgroundModel.Build(new ChartUpdateMode(ChartUpdateMode.UpdateMode.Insert, insertedQuotes));

            return model;
        }


    }
}