using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Strategies.Rules
{
    public interface IRuleSetView
    {
        int RuleSetId { get; set; }
        string RuleSetName { get; set; }
        int Period { get; set; }
        bool Deleted { get; set; }
        string Description { get; set; }
        int RuleId { get; set; }
        string RuleName { get; set; }
        int OrderId { get; set; }
        string RuleDescription { get; set; }
    }
}
