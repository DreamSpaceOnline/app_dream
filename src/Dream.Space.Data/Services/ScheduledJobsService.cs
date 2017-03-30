using Dream.Space.Data.Repositories;

namespace Dream.Space.Data.Services
{
    public class ScheduledJobsService: IScheduledJobsService
    {
        private readonly IScheduledJobRepository _scheduledJobRepository;

        public ScheduledJobsService(IScheduledJobRepository scheduledJobRepository)
        {
            _scheduledJobRepository = scheduledJobRepository;
        }
    }
}
