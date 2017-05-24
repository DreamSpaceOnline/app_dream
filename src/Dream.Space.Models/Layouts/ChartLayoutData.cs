using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Indicators;
using Dream.Space.Models.Quotes;

namespace Dream.Space.Models.Layouts
{
    public class ChartLayoutData
    {
        public ChartLayoutData()
        {
            Company = new CompanyHeaderInfo();
            Periods = new List<ChartLayoutPeriodData>();
        }

        public CompanyHeaderInfo Company { get; set; }
        public IList<ChartLayoutPeriodData> Periods { get; set; }
    }

    public class CompanyHeaderInfo
    {
        public string Ticker { get; set; }
        public string Name { get; set; }
    }

    public class ChartLayoutPeriodData
    {
        public ChartLayoutPeriodData()
        {
            Quotes = new List<QuotesModel>();    
            Plots = new List<ChartPlotData>();
        }

        public QuotePeriod Period { get; set; }
        public IList<QuotesModel> Quotes { get; set; }
        public IList<ChartPlotData> Plots { get; set; }
    }

    public class ChartPlotData
    {
        public ChartPlotData(ChartPlotModel plotModel) 
        {
            PlotId = plotModel.PlotId;
            Height = plotModel.Height;
            Indicators = plotModel.Indicators.Select(i => new ChartIndicatorData(i)).ToList();
        }
        public ChartPlotData()
        {
            Indicators = new List<ChartIndicatorData>();    
        }

        public int PlotId { get; set; }
        public int Height { get; set; }
        public IList<ChartIndicatorData> Indicators { get; set; }
    }

    public class ChartIndicatorData
    {
        public ChartIndicatorData(LayoutIndicatorModel indicator) : this()
        {
            IndicatorId = indicator.IndicatorId;
            Name = indicator.Name;
        }

        public ChartIndicatorData()
        {
            Data = new List<IndicatorDataResult>();    
        }

        public int IndicatorId { get; set; }
        public string Name { get; set; }
        public IList<IndicatorDataResult> Data { get; set; }
    }

    public class IndicatorDataResult
    {

        public DateTime Date { get; set; }
        public IndicatorValues Values { get; set; }
    }

}
