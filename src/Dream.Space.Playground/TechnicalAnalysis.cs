using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Calculators.IndicatorProcessor;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Enums;
using Dream.Space.Data.Extensions;
using Dream.Space.Playground.Models;
using Dream.Space.Reader.Models;

namespace Dream.Space.Tests.Services
{
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
}