using System.Collections.Generic;
using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Indicators
{
    public interface IIndicatorEntity
    {
        int IndicatorId { get; set; }
        QuotePeriod Period { get; set; }
        List<IndicatorParam> Params { get; set; }
        string Name { get; set; }
        string JsonParams { get; set; }
        string Description { get; set; }
    }
}
