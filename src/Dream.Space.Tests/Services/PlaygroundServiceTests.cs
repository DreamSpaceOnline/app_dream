using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Calculators.IndicatorProcessor;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Enums;
using Dream.Space.Data.Extensions;
using Dream.Space.Indicators.Models;
using Dream.Space.Playground;
using Dream.Space.Reader.Models;
using NUnit.Framework;

namespace Dream.Space.Tests.Services
{
    [TestFixture]
    public class PlaygroundServiceTests
    {
        private IPlaygroundService _service;
        private List<QuotesModel> _quotes;
        private DateTime _currentDate;
        private TechnicalAnalysis _technicalAnalysis;
        private List<Indicator> _indicators;
        private IndicatorProcessorFactory _indicatorProcessorFactory;

        [OneTimeSetUp]
        public async Task OneTimeSetUp()
        {
            _service = IoCContainer.Instance.Resolve<IPlaygroundService>();
            _indicatorProcessorFactory = IoCContainer.Instance.Resolve<IndicatorProcessorFactory>();

            _quotes = await _service.LoadHistoryAsync("A");
            _indicators = await _service.LoadIndicatorsAsync(3);
        }

        [SetUp]
        public void Init()
        {
            const int bars = 100;
            _currentDate = _quotes.ToWeeekly().TakeLast(bars).First().Date;
            _technicalAnalysis = new TechnicalAnalysis(_quotes, _indicators, _indicatorProcessorFactory, bars);
            _technicalAnalysis.Initialize(_currentDate);
        }

        [Test]
        public void MoveNext()
        {
            Assert.That(true);
        }

        [Test]
        public void MovePrev()
        {
            
        }
    }

    public class TechnicalAnalysis
    {
        private List<QuotesModel> Quotes { get; }
        private List<Indicator> Indicators { get; }
        private IndicatorProcessorFactory IndicatorProcessorFactory { get; }
        private int Bars { get; }
        private DateTime CurrentDate { get; set; }
        private List<ChartData> Periods { get; }
        private DateTime InitialDate { get; set; }

        public TechnicalAnalysis(List<QuotesModel> quotes, List<Indicator> indicators, IndicatorProcessorFactory indicatorProcessorFactory, int bars)
        {
            Quotes = quotes;
            Indicators = indicators;
            IndicatorProcessorFactory = indicatorProcessorFactory;
            Bars = bars;
            Periods = new List<ChartData>();
        }

        public void Initialize(DateTime? currentDate)
        {
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
            var maxPeriod = Indicators.Where(i => i.Period == period).Max(p => p.Params.Max(c => c.Value));
            var quotes = CalculateVirtualPeriod(period, maxPeriod);
            var indicators = CalculateIndicators(quotes, Indicators.Where(i => i.Period == period).ToList());

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
                var calculator = IndicatorProcessorFactory.Create(indicator);
                if (calculator != null)
                {
                    if (result.All(i => i.Indicator.IndicatorId != indicator.IndicatorId))
                    {
                        var item = new IndicatorChartData()
                        {
                            Indicator = indicator,
                            IndicatorValues = calculator.Calculate(indicator, quotes)
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
                    return Quotes.Where(q => q.Date <= CurrentDate).Take(Bars+virtualOffset).ToList();
                case QuotePeriod.Weekly:
                    return Quotes.Where(q => q.Date <= CurrentDate).ToList().ToWeeekly().Take(Bars + virtualOffset).ToList();
                default:
                    throw new ArgumentOutOfRangeException(nameof(period), period, null);
            }
        }

        public CompanyChartData MoveNext()
        {
            if (CurrentDate < Quotes.First().Date)
            {
                CurrentDate = CurrentDate.AddDays(1);
                Initialize();
            }

            return CalculateCompanyChartData();
        }

        public CompanyChartData MovePrev()
        {
            if (CurrentDate > InitialDate)
            {
                CurrentDate = CurrentDate.AddDays(-1);
                Initialize();
            }
            return CalculateCompanyChartData();
        }

        public CompanyChartData Reset()
        {
            CurrentDate = InitialDate;
            Initialize();

            return CalculateCompanyChartData();
        }

        private CompanyChartData CalculateCompanyChartData()
        {
            return new CompanyChartData();
        }

        private DateTime CalculateCurrentDate(DateTime? currentDate)
        {
            var weekly = Quotes.ToWeeekly();
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

    public class ChartData
    {
        public List<QuotesModel> Quotes { get; set; }
        public List<IndicatorChartData> Indicators { get; set; }
        public QuotePeriod Period { get; set; }
    }

    public class CompanyChartData
    {
        public CompanyChartData()
        {
            Periods = new List<ChartData>();    
        }

        public List<ChartData> Periods { get; set; }
        public CompanyInfo Company { get; set; }
    }


    public class IndicatorChartData
    {
        public Indicator Indicator { get; set; }
        public List<IndicatorModel> IndicatorValues { get; set; }
    }

    public class CompanyInfo
    {
        public string Ticker { get; set; }
        public string Name { get; set; }
    }
}
