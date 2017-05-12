using System;
using Dream.Space.Models.Enums;
using Newtonsoft.Json;

namespace Dream.Space.Models.Indicators
{
    public class IndicatorResult : IIndicatorResult
    {
        public IndicatorResult(DateTime date)
        {
            Values = new IndicatorValues();
            Date = date;
        }

        [JsonIgnore]
        public decimal Value {
            get
            {
                return Values.GetValue(ValueKind.Value);
            }

            set
            {
                Values.SetValue(ValueKind.Value, value);
            }
        }


        public DateTime Date { get; set; }
        public IndicatorValues Values { get; set; }


        public NHNLIndicatorResultDecorator AsNHNLIndicatorResult()
        {
            return new NHNLIndicatorResultDecorator(this);
        }
    }
}