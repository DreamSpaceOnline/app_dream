namespace Dream.Space.Models.Strategies.RuleSets
{
    public interface IStrategyRuleSetView
    {
        int StrategyId { get; set; }
        bool StrategyActive { get; set; }
        int RuleSetId { get; set; }
        string RuleSetName { get; set; }
        string RuleSetDescription { get; set; }
        int RuleSetPeriod { get; set; }
        int RuleSetOrderId { get; set; }
        bool RuleSetOptional { get; set; }
    }
}