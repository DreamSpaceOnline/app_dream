using Dream.Space.Data.Entities.Strategies;

namespace Dream.Space.Data.Models
{
    public class StrategySummary
    {

        public StrategySummary()
        {
            
        }

        public StrategySummary(Strategy strategy)
        {
            StrategyId = strategy.StrategyId;
            Title = strategy.Name;
            Summary = strategy.Description;
            Url = strategy.Url;
            Active = strategy.Active;
        }

        public bool Active { get; set; }

        public string Url { get; set; }

        public string Summary { get; set; }

        public int StrategyId { get; set; }

        public string Title { get;  set; }
    }
}
