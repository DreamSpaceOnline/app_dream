namespace Dream.Space.Data.Services
{
    public class GlobalMarketsService : IGlobalMarketsService
    {
        private readonly IScheduledJobsService _scheduledJobs;

        public GlobalMarketsService(IScheduledJobsService scheduledJobs)
        {
            _scheduledJobs = scheduledJobs;
        }
    }
}