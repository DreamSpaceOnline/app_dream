using System.ComponentModel.DataAnnotations.Schema;

namespace Dream.Space.Data.Entities.Strategies
{
    [Table("vStrategyRuleSet")]
    public class vStrategyRuleSet
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
