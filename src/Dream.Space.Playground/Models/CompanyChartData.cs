using System.Collections.Generic;

namespace Dream.Space.Playground.Models
{
    public class CompanyChartData
    {
        public CompanyChartData()
        {
            Periods = new List<ChartData>();    
        }

        public List<ChartData> Periods { get; set; }
        public CompanyInfo Company { get; set; }
    }
}