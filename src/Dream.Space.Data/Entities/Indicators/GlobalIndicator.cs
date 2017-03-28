using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Dream.Space.Models.Indicators;
using Newtonsoft.Json;

namespace Dream.Space.Data.Entities.Indicators
{
    public class GlobalIndicator
    {
        public int SectorId { get; set; }
        public int IndicatorId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime LastCalculated { get; set; }
        public int CompanyCount { get; set; }

        [NotMapped]
        public List<IndicatorResult> Values
        {
            get { return JsonConvert.DeserializeObject<List<IndicatorResult>>(ValuesJson); }
            set { ValuesJson = JsonConvert.SerializeObject(value); }
        }

        public string ValuesJson { get; set; }

        public bool CalculatedSuccessful { get; set; }
        public string CalculatedError { get; set; }

    }
}
