using System.ComponentModel.DataAnnotations.Schema;
using Dream.Space.Models.Strategies.Rules;

namespace Dream.Space.Data.Entities.Strategies
{
    [Table("vRuleSet")]
    public partial class vRuleSet : IRuleSetView
    {
        public int RuleSetId { get; set; }

        public string RuleSetName { get; set; }

        public string Description { get; set; }

        public string RuleDescription { get; set; }

        public int Period { get; set; }

        public bool Deleted { get; set; }

        public int RuleId { get; set; }

        public string RuleName { get; set; }

        public int OrderId { get; set; }

    }
}
