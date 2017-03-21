using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dream.Space.Models.Strategies
{
    public interface IStrategyEntity
    {
        int StrategyId { get; set; }
        string Name { get; set; }
        bool Active { get; set; }
        string Url { get; set; }
        bool Deleted { get; set; }
        string Description { get; set; }
        string JsonArticleBlocks { get; set; }
    }
}
