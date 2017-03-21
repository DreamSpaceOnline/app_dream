using System.Collections.Generic;
using System.Data.Entity;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Models;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Indicators;

namespace Dream.Space.Data
{
    public class DreamDbInitializer : DropCreateDatabaseIfModelChanges<DreamDbContext>
    {
        protected override void Seed(DreamDbContext context)
        {
            var indicators = new List<Indicator>
            {
                new Indicator{ Name = "EMA", Params = new List<IndicatorParam> {new IndicatorParam {ParamName = IndicatorParamName.Period.ToString(), Value = 13} }, Period = QuotePeriod.Daily},
                new Indicator{ Name = "EMA", Params = new List<IndicatorParam> {new IndicatorParam {ParamName = IndicatorParamName.Period.ToString(), Value = 26} }, Period = QuotePeriod.Daily},
                new Indicator{ Name = "EMA", Params = new List<IndicatorParam> {new IndicatorParam {ParamName = IndicatorParamName.Period.ToString(), Value = 13} }, Period = QuotePeriod.Weekly},
                new Indicator{ Name = "EMA", Params = new List<IndicatorParam> {new IndicatorParam {ParamName = IndicatorParamName.Period.ToString(), Value = 26} }, Period = QuotePeriod.Weekly},
            };

            indicators.ForEach(i => context.Indicators.Add(i));
            context.SaveChanges();
        }
    }
}