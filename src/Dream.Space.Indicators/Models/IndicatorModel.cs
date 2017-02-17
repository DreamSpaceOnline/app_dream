using System;

namespace Dream.Space.Indicators.Models
{

    public class IndicatorModel : IIndicatorModel
    {
        public decimal Value { get; set; }
        public DateTime Date { get; set; }
    }
}