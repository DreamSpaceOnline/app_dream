using Hangfire.Dashboard;
using System.Web;
using Hangfire.Annotations;

namespace Dream.Space.Attributes
{
    public class HangFireAuthorizationFilter : IDashboardAuthorizationFilter
    {
        public bool Authorize([NotNull] DashboardContext context)
        {
            return true;
        }
    }
}