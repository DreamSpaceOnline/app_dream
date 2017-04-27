using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Strategies.Rules
{
    public interface IStrategyRuleView
    {
        int StrategyId { get; set; }
        bool Optional { get; set; }
        int RuleSetId { get; set; }
        string RuleSetName { get; set; }
        int OrderId { get; set; }
        int RuleId { get; set; }
        string RuleName { get; set; }
        QuotePeriod Period { get; set; }
        DataSourceType DataSourceV1 { get; set; }
        DataSourceType DataSourceV2 { get; set; }
        int DataSeriesV1 { get; set; }
        int DataSeriesV2 { get; set; }
        string ConstV1 { get; set; }
        string ConstV2 { get; set; }
        int SkipItemsV1 { get; set; }
        int SkipItemsV2 { get; set; }
        int TakeItemsV1 { get; set; }
        int TakeItemsV2 { get; set; }
        TransformFunction TransformItemsV1 { get; set; }
        TransformFunction TransformItemsV2 { get; set; }
        CompareOperator Condition { get; set; }
    }
}