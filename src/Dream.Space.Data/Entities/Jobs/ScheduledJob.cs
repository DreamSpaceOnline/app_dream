using System;
using System.Diagnostics;

namespace Dream.Space.Data.Entities.Jobs
{
    public class ScheduledJob
    {
        public int JobId { get; set; }
        public ScheduledJobType JobType { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime CompletetDate { get; set; }
        public string JobName { get; set; }
        public JobStatus Status { get; set; }
        public int Progress { get; set; }

        public bool IsFinished()
        {
            switch (Status)
            {
                case JobStatus.Completed:
                case JobStatus.Cancelled:
                case JobStatus.Error:

                    return true;
                default:
                    return false;
            }
        }

        public bool Expired()
        {
            return DateTime.Today.AddDays(-1) > StartDate;
        }
    }
}
