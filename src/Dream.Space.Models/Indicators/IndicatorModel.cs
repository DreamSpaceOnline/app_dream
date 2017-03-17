using System;
using System.Collections.Generic;

namespace Dream.Space.Models.Indicators
{

    public class IndicatorModel : IIndicatorModel
    {
        public enum ValueType
        {
            Value = 0,
            NewNigh = 1,
            NewLow = 2
        }

        public IndicatorModel()
        {
            Values = new Dictionary<ValueType, decimal>();
        }



        public decimal Value {
            get
            {
                if (!Values.ContainsKey(ValueType.Value))
                {
                    Values.Add(ValueType.Value, 0);
                }
                return Values[ValueType.Value];
            }

            set
            {
                if (!Values.ContainsKey(ValueType.Value))
                {
                    Values.Add(ValueType.Value, 0);
                }
                Values[ValueType.Value] = value;
            }
        }


        public IDictionary<ValueType, decimal> Values { get; set; }
        public DateTime Date { get; set; }
    }
}