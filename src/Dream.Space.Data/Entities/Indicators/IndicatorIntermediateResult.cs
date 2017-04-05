using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Dream.Space.Models.Indicators;
using Newtonsoft.Json;

namespace Dream.Space.Data.Entities.Indicators
{
    public class IndicatorIntermediateResult
    {
        [NotMapped]
        public List<IndicatorResult> Values
        {
            get { return JsonConvert.DeserializeObject<List<IndicatorResult>>(ValuesJson); }
            set { ValuesJson = JsonConvert.SerializeObject(value); }
        }

        public string ValuesJson { get; set; }
        public int JobId { get; set; }
        public int IndicatorId { get; set; }
    }
}
