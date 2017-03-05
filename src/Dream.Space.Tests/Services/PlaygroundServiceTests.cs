using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Enums;
using Dream.Space.Data.Extensions; 
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

        [OneTimeSetUp]
        public async Task OneTimeSetUp()
        {
            _service = IoCContainer.Instance.Resolve<IPlaygroundService>();
            _quotes = await _service.LoadHistoryAsync("A");
            _indicators = await _service.LoadIndicatorsAsync(3);
        }

        [SetUp]
        public void Init()
        {
            const int bars = 100;
            _currentDate = _quotes.ToWeeekly().TakeLast(bars).First().Date;
            _technicalAnalysis = new TechnicalAnalysis(_quotes, _indicators, bars);
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
        public List<QuotesModel> Quotes { get; }
        public List<Indicator> Indicators { get; }
        public int Bars { get; }
        public DateTime CurrentDate { get; private set; }
        public Dictionary<QuotePeriod, CompanyChartData> Periods { get; private set; }
        public DateTime InitialDate { get; private set; }

        public TechnicalAnalysis(List<QuotesModel> quotes, List<Indicator> indicators, int bars)
        {
            Quotes = quotes;
            Indicators = indicators;
            Bars = bars;
            Periods = new Dictionary<QuotePeriod, CompanyChartData>();
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
                Periods.Add(period, CalculateCompanyChartData(period));
            }
        }

        private CompanyChartData CalculateCompanyChartData(QuotePeriod period)
        {
            return new CompanyChartData();
        }

        public void MoveNext()
        {
            if (CurrentDate < Quotes.First().Date)
            {
                CurrentDate = CurrentDate.AddDays(1);
                Initialize();
            }
        }

        public void MovePrev()
        {
            if (CurrentDate > InitialDate)
            {
                CurrentDate = CurrentDate.AddDays(-1);
                Initialize();
            }
        }

        public void Reset()
        {
            CurrentDate = InitialDate;
            Initialize();
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

    public class CompanyChartData
    {
        
    }
}
