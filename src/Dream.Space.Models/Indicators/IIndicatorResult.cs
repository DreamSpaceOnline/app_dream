using System;
using System.Collections.Generic;
using System.Linq;
using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Indicators
{
    public class IndicatorValues : List<IndicatorValueItem>
    {

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