using System.ComponentModel.DataAnnotations.Schema;

namespace Dream.Space.Data.Entities.Strategies
{
    [Table("vStrategy")]
    public partial class vStrategy
    {
        public int StrategyId { get; set; }

        public string StrategyName { get; set; }

        public string StrategyDescription { get; set; }

        public string JsonArticleBlocks { get; set; }

        public string Url { get; set; }

        public bool Deleted { get; set; }

        public bool Active { get; set; }


        public int RuleSetId { get; set; }

        public string RuleSetName { get; set; }

        public string RuleSetDescription { get; set; }

        public int Period { get; set; }

        public int OrderId { get; set; }

        public bool Optional { get; set; }

    }
}
