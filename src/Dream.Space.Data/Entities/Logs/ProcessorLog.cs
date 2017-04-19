using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dream.Space.Data.Entities.Logs
{
    public class ProcessorLog
    {
        public int Id { get; set; }
        public DateTime Logged { get; set; }
        public string Level { get; set; }
        public string Message { get; set; }
        public string Processor { get; set; }
        public string JobType { get; set; }
        public string JobState { get; set; }
        public string Exception { get; set; }
        public int JobId { get; set; }
    }
}
