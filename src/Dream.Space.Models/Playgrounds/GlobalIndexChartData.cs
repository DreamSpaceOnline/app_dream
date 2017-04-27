using System.Collections.Generic;

namespace Dream.Space.Models.Playgrounds
{
    public class GlobalIndexChartData    {
        public GlobalIndexChartData()
        {
            Periods = new List<ChartData>();
        }

        public List<ChartData> Periods { get; set; }
        public CompanyInfo Company { get; set; }
    }
}