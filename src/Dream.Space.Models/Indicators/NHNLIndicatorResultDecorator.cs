using System;
using Dream.Space.Models.Enums;

namespace Dream.Space.Models.Indicators
{
    public class NHNLIndicatorResultDecorator
    {
        public IndicatorResult Result { get; }

        public NHNLIndicatorResultDecorator(IndicatorResult result)
        {
            Result = result;
        }



        public decimal NewHigh
        {
            get
            {
                return Result.Values.GetValue(ValueKind.NewNigh);
            }

            set
            {
                Result.Values.SetValue(ValueKind.NewNigh, value);
            }
        }
        public decimal NewLow
        {
            get
            {
                return Result.Values.GetValue(ValueKind.NewLow);
            }

            set
            {
                Result.Values.SetValue(ValueKind.NewLow, value);
            }
        }
    }
}