using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using Dream.Space.Data.Enums;
using Dream.Space.Data.Models;
using Newtonsoft.Json;

namespace Dream.Space.Data.Entities.Indicators
{
    public class Indicator
    {
        public Indicator()
        {
        }

        public int IndicatorId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public QuotePeriod Period { get; set; }
        public string JsonParams { get; set; }
        public DateTime LastUpdated { get; set; }
        public bool Deleted { get; set; }
        public bool Global { get; set; }
        public int ChartPlotNumber { get; set; }
        public string ChartColor { get; set; }

        [NotMapped]
        public List<IndicatorParam> Params {
            get { return JsonConvert.DeserializeObject<List<IndicatorParam>>(JsonParams); }
            set { JsonParams = JsonConvert.SerializeObject(value); }
        }

        public ChartType ChartType { get; set; }

        public override string ToString()
        {
            if (string.IsNullOrEmpty(Name) || string.IsNullOrWhiteSpace(JsonParams))
            {
                return base.ToString();
            }
            else
            {
                return $"{Name.ToUpper()}({string.Join(",", Params.Select(p => p.Value).ToArray())})";
            }
        }
    }
}
