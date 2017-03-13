using System;

namespace Dream.Space.Models.Indicators
{

    public class IndicatorModel : IIndicatorModel
    {
        public decimal Value { get; set; }
        public DateTime Date { get; set; }
    }
}