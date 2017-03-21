using Dream.Space.Models.Strategies;

namespace Dream.Space.Data.Entities.Strategies
{
    public class Strategy: IStrategyEntity
    {
        public int StrategyId { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string JsonArticleBlocks { get; set; }
        public string Description { get; set; }
        public bool Deleted { get; set; }
        public bool Active { get; set; }
    }
}