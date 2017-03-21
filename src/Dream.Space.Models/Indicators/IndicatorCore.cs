using System.Linq;
using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Indicators
{
    public class IndicatorCore
    {
        public IndicatorCore()
        {

        }

        public IndicatorCore(IIndicatorEntity indicator )
        {
            Name = GenerateName(indicator);
            Id = indicator.IndicatorId;
            Period = indicator.Period;
        }

        private string GenerateName(IIndicatorEntity indicator)
        {
            var parameters = indicator.Params.Select(p => p.Value).ToArray();

            return $"{indicator.Name} ({string.Join(",", parameters)}) - {indicator.Period.ToString()}";
        }

        public string Name { get; set; }
        public int Id { get; set; }
        public QuotePeriod  Period { get; set; }
    }
}
