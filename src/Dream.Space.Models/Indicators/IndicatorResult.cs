using System;
using System.Collections.Generic;
using Dream.Space.Models.Enums;
using Newtonsoft.Json;

namespace Dream.Space.Models.Indicators
{
    public class IndicatorResult : IIndicatorResult
    {
        public IndicatorResult(DateTime date)
        {
            Values = new List<IndicatorValueItem>();
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
        public List<IndicatorValueItem> Values { get; set; }


        public NHNLIndicatorResultDecorator AsNHNLIndicatorResult()
        {
            return new NHNLIndicatorResultDecorator(this);
        }
    }
}