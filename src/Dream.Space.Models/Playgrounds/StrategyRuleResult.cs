using System;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Strategies.Rules;

namespace Dream.Space.Models.Playgrounds
{
    public class StrategyRuleResult
    {

        public StrategyRuleResult(IStrategyRuleView rule)
        {
            Initialize(rule);
        }

        private void Initialize(IStrategyRuleView rule)
        {
            Condition = rule.Condition;
            RuleName = rule.RuleName;
            RuleSetName = rule.RuleSetName;
            RuleSetId = rule.RuleSetId;
            RuleId = rule.RuleId;
        }

        public CompareOperator Condition { get; private set; }
        public int RuleSetId { get; private set; }
        public int RuleId { get; private set; }
        public string RuleName { get; private set; }
        public string RuleSetName { get; private set; }
        public decimal FirstValue { get; private set; }
        public decimal SecondValue { get; private set; }
        public bool Valid { get; private set; }

        public void Compare(decimal firstValue, decimal secondValue)
        {
            FirstValue = firstValue;
            SecondValue = secondValue;

            switch (Condition)
            {
                case CompareOperator.Greater:
                    Valid = FirstValue > SecondValue;
                    break;
                case CompareOperator.GreaterOrEqual:
                    Valid = FirstValue >= SecondValue;
                    break;
                case CompareOperator.Equal:
                    Valid = FirstValue == SecondValue;
                    break;
                case CompareOperator.Less:
                    Valid = FirstValue < SecondValue;
                    break;
                case CompareOperator.LessOrEqual:
                    Valid = FirstValue <= SecondValue;
                    break;
                case CompareOperator.NotEqual:
                    Valid = FirstValue != SecondValue;
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }

        }

    }
}