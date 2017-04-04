using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Extensions;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Quotes;
using Dream.Space.Playground.Models;

namespace Dream.Space.Playground
{
    public class PlaygroundProcessor
    {
        public int Bars { get; private set; }

        private readonly PlaygroundConfiguration _configuration;

        public PlaygroundProcessor(PlaygroundConfiguration configuration)
        {
            _configuration = configuration;
            Bars = 100;
            Periods = new List<ChartData>();
        }

        public string Ticker => _configuration.Company.Ticker;
        public int QuotesCount => _configuration.Quotes.Count;
        public int StrategyId => _configuration.StrategyId;

        private DateTime CurrentDate { get; set; }
        private List<ChartData> Periods { get; }
        private DateTime InitialDate { get; set; }


        public void Initialize(DateTime currentDate, int bars)
        {
            Bars = bars;
            CurrentDate = CalculateCurrentDate(currentDate);
            InitialDate = CurrentDate;

            Initialize();
        }

        private void Initialize()
        {
            Periods.Clear();
            foreach (QuotePeriod period in Enum.GetValues(typeof(QuotePeriod)))
            {
                Periods.Add(CalculateChartData(period));
            }
        }

        private ChartData CalculateChartData(QuotePeriod period)
        {
            var maxPeriod = _configuration.Indicators.Where(i => i.Period == period).Max(p => p.Params.Max(c => c.Value));
            var quotes = CalculateVirtualPeriod(period, maxPeriod);
            var indicators = CalculateIndicators(quotes, _configuration.Indicators.Where(i => i.Period == period).ToList());

            return new ChartData()
            {
                Quotes = quotes.Take(Bars).ToList(),
                Indicators = indicators,
                Period = period
            };
        }

        private List<IndicatorChartData> CalculateIndicators(List<QuotesModel> quotes, List<Indicator> indicators)
        {
            var result = new List<IndicatorChartData>();

            foreach (var indicator in indicators)
            {
                var calculator = _configuration.CalculatorFactory.Create(indicator);
                if (calculator != null)
                {
                    if (result.All(i => i.Indicator.IndicatorId != indicator.IndicatorId))
                    {
                        var item = new IndicatorChartData()
                        {
                            Indicator = indicator,
                            IndicatorValues = calculator.Calculate(indicator, quotes).Take(Bars).ToList()
                        };
                        result.Add(item);
                    }
                }
            }

            return result;
        }


        private List<QuotesModel> CalculateVirtualPeriod(QuotePeriod period, int virtualOffset)
        {
            switch (period)
            {
                case QuotePeriod.Daily:
                    return _configuration.Quotes.Where(q => q.Date <= CurrentDate).Take(Bars + virtualOffset).ToList();
                case QuotePeriod.Weekly:
                    return _configuration.Quotes.Where(q => q.Date <= CurrentDate).ToList().ToWeeekly().Take(Bars + virtualOffset).ToList();
                default:
                    throw new ArgumentOutOfRangeException(nameof(period), period, null);
            }
        }

        public CompanyChartData MoveNext()
        {
            CurrentDate = CurrentDate.AddDays(1);
            while (IsEmpty(CurrentDate))
            {
                CurrentDate = CurrentDate.AddDays(1);
            }

            if (CurrentDate < _configuration.Quotes.First().Date)
            {
                Initialize();
            }

            return CalculateCompanyChartData();
        }


        public CompanyChartData Current()
        {
            return CalculateCompanyChartData();
        }

        public CompanyChartData MovePrev()
        {
            CurrentDate = CurrentDate.AddDays(-1);
            while (IsEmpty(CurrentDate))
            {
                CurrentDate = CurrentDate.AddDays(-1);
            }

            if (CurrentDate > InitialDate)
            {
                Initialize();
            }

            return CalculateCompanyChartData();
        }

        private bool IsEmpty(DateTime currentDate)
        {
            if (currentDate > InitialDate && currentDate < _configuration.Quotes.First().Date)
            {
                var quote = _configuration.Quotes.FirstOrDefault(q => q.Date == currentDate);
                return quote == null;
            }
            return false;
        }

        public CompanyChartData Reset()
        {
            CurrentDate = InitialDate;
            Initialize();

            return CalculateCompanyChartData();
        }

        private CompanyChartData CalculateCompanyChartData()
        {
            
            var result = new CompanyChartData()
            {
                Periods = Periods,
                Company = _configuration.Company
            };

            var ruleSets = new StrategyRulesCalculator(_configuration.Rules, result).Calculate();
            result.RuleSets = ruleSets;

            return result;
        }

        private DateTime CalculateCurrentDate(DateTime? currentDate)
        {
            var weekly = _configuration.Quotes.ToWeeekly();
            var result = weekly.TakeLast(Bars).First().Date;
            if (currentDate != null)
            {
                var pos = weekly.FindIndex(q => q.Date <= currentDate);
                if (pos > -1 && weekly.Count - pos >= Bars)
                {
                    result = currentDate.Value;
                }
            }

            return result;
        }
    }
}