using System.ComponentModel.DataAnnotations.Schema;
using Dream.Space.Models.Strategies.RuleSets;

namespace Dream.Space.Data.Entities.Strategies
{
    [Table("vStrategyRuleSet")]
    public class vStrategyRuleSet : IStrategyRuleSetView
    {
        public int StrategyId { get; set; }
        public bool StrategyActive { get; set; }
        public int RuleSetId { get; set; }
        public string RuleSetName { get; set; }
        public string RuleSetDescription { get; set; }
        public int RuleSetPeriod { get; set; }
        public int RuleSetOrderId { get; set; }
        public bool RuleSetOptional { get; set; }
    }
}
