using System.Collections.Generic;

namespace Dream.Space.Models.Playgrounds
{
    public class CompanyChartData : GlobalIndexChartData
    {
        public CompanyChartData(): base()
        {
            RuleSets = new List<StrategyRuleSetResult>();
        }

        public List<StrategyRuleSetResult> RuleSets { get; set; }
    }
}