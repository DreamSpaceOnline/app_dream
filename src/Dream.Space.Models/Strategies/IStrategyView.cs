namespace Dream.Space.Models.Strategies
{
    public interface IStrategyView
    {
        int StrategyId { get; set; }
        string StrategyName { get; set; }
        bool Active { get; set; }
        string Url { get; set; }
        bool Deleted { get; set; }
        string StrategyDescription { get; set; }
        int RuleSetId { get; set; }
        string RuleSetName { get; set; }
        string RuleSetDescription { get; set; }
        int Period { get; set; }
        int OrderId { get; set; }
        bool Optional { get; set; }
    }
}
