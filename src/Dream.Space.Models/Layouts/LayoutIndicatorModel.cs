using System;
using System.Collections.Generic;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Indicators;
using Dream.Space.Models.Layourts;

namespace Dream.Space.Models.Layourts
{
    public class LayoutIndicatorModel 
    {
        public int Id { get; set; }
        public int LayoutId { get; set; }
        public int IndicatorId { get; set; }
        public int OrderId { get; set; }
        public IndicatorModel Indicator { get; set; }
        public string Name { get; set; }
        public string LineColor { get; set; }
    }

    public class IndicatorModel : IIndicatorEntity
    {
        public IndicatorModel()
        {

        }

        public IndicatorModel(IIndicatorEntity model)
        {
            IndicatorId = model.IndicatorId;
            Period = model.Period;
            Params = model.Params;
            Name = model.Name;
            JsonParams = model.JsonParams;
            Description = model.Description;
        }

        public int IndicatorId { get; set; }
        public QuotePeriod Period { get; set ; }
        public List<IndicatorParam> Params { get; set; }
        public string Name { get; set; }
        public string JsonParams { get; set; }
        public string Description { get; set; }
    }
}
