using System;

namespace Dream.Space.Data.Requests
{
    public class CompaniesToProcessRequest
    {
        public TimeSpan FromTimeAgo { get; set; }
        public int MaxRecordCount { get; set; }
    }
}