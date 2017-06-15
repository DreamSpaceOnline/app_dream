using System.Collections.Generic;
using System.Linq;
using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Indicators
{
    public static class IndicatorValueItemExtensions
    {
        public static decimal GetValue(this List<IndicatorValueItem> items, ValueKind kind)
        {
            var result = items.FirstOrDefault(v => v.Kind == kind);
            return result?.Value ?? 0;
        }

        public static void SetValue(this List<IndicatorValueItem> items, ValueKind kind, decimal value)
        {
            var val = items.FirstOrDefault(v => v.Kind == kind);
            if (val == null)
            {
                items.Add(new IndicatorValueItem { Kind = kind, Value = value });
            }
            else
            {
                val.Value = value;
            }
        }
    }
}