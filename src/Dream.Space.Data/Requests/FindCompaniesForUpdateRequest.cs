using System;

namespace Dream.Space.Data.Requests
{
    public class FindCompaniesForUpdateRequest
    {
        public TimeSpan FromTimeAgo { get; set; }
        public int MaxRecordCount { get; set; }
    }
}