using System;
using System.Collections.Generic;
using System.Linq;

namespace Dream.Space.Models.Indicators
{
    public enum ValueKind
    {
        Value = 0,
        NewNigh = 1,
        NewLow = 2,
        UpperBand = 3,
        LowerBand = 4
    }

    public class IndicatorValueItem
    {
        public ValueKind Kind { get; set; }
        public string Name => Kind.ToString();
        public decimal Value { get; set; }
    }

    public class IndicatorValues : List<IndicatorValueItem>
    {
        public DateTime Date { get; }

        public IndicatorValues(DateTime date)
        {
            Date = date;
        }

        public decimal GetValue(ValueKind kind)
        {
            var result = this.FirstOrDefault(v => v.Kind == kind);
            return result?.Value ?? 0;

        }

        public void SetValue(ValueKind kind, decimal value)
        {
            var val = this.FirstOrDefault(v => v.Kind == kind);
            if (val == null)
            {
                this.Add(new IndicatorValueItem { Kind = kind, Value = value });
            }
            else
            {
                val.Value = value;
            }

        }
    }

    public interface IIndicatorResult
    {
        IndicatorValues Values { get; set; }
        DateTime Date { get; set; }
    }
}