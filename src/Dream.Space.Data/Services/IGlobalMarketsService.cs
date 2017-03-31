using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dream.Space.Data.Entities.Jobs;

namespace Dream.Space.Data.Services
{
    public interface IGlobalMarketsService
    {
        Task RefreshAllStocksAsync();
        Task RefreshSP500StocksAsync();
        Task RecalculateGlobalIndexesAsync();
        Task<IList<ScheduledJob>> GetActiveJobsProgressAsync();
        Task<IList<ScheduledJob>> GetJobHistoryAsync(string jobType = null);
        Task CancelScheduledJobAsync(int jobId);
        Task PauseScheduledJobAsync(int jobId);
        Task ResumeScheduledJobAsync(int jobId);
        Task ClearJobsHistoryAsync();
    }
}
