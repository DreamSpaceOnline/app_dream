﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Dream.Space.Data.Models;
using Newtonsoft.Json;

namespace Dream.Space.Data.Entities.Companies
{
    public class CompanyIndicator
    {
        public string Ticker { get; set; }
        public DateTime LastUpdated { get; set; }
        public int IndicatorId { get; set; }
        public string JsonData { get; set; }

        [NotMapped]
        public List<IndicatorData> Data
        {
            get { return JsonConvert.DeserializeObject<List<IndicatorData>>(JsonData); }
            set { JsonData = JsonConvert.SerializeObject(value); }
        }
    }
}