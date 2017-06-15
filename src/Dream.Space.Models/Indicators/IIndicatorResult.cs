using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Indicators
{
    public interface IIndicatorResult
    {
        List<IndicatorValueItem> Values { get; set; }
        DateTime Date { get; set; }
    }
}