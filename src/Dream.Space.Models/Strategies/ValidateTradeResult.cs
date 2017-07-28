using System.Collections.Generic;

namespace Dream.Space.Models.Strategies
{
    public class ValidateTradeResult
    {
        public int StrategyId { get; set; }
        public string StrategyName { get; set; }
        public bool IsValid { get; set; }
        public List<RuleSetValidationResult> RuleSets { get; set; }

    }

    public class RuleSetValidationResult
    {
        public int RuleSetId { get; set; }
        public string RuleSetName { get; set; }

        public bool IsValid { get; set; }
        public List<RuleValidationResult> Rules { get; set; }

    }

    public class RuleValidationResult
    {
        public int RuleId { get; set; }
        public string RuleName { get; set; }

        public bool IsValid { get; set; }
        public string Message { get; set; }

    }
}
