using System.Collections.Generic;

namespace Dream.Space.Playground.Models
{
    public class CompanyChartData
    {
        public CompanyChartData()
        {
            Periods = new List<ChartData>();
            RuleSets = new List<StrategyRuleSetResult>();
        }

        public List<ChartData> Periods { get; set; }
        public CompanyInfo Company { get; set; }
        public List<StrategyRuleSetResult> RuleSets { get; set; }
    }
}