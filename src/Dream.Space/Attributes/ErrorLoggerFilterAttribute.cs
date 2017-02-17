using System;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http.Filters;

namespace Dream.Space.Attributes
{
    public class ErrorLoggerFilterAttribute : ExceptionFilterAttribute
    {
        //[Inject]
        //public ILogger Logger { get; set; }

        //[Inject]
        //public IMonitoringService MonitoringService { get; set; }

        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            LogException(actionExecutedContext.Exception);
        }

        public override Task OnExceptionAsync(HttpActionExecutedContext actionExecutedContext,
            CancellationToken cancellationToken)
        {
            LogException(actionExecutedContext.Exception);

            return Task.FromResult<object>(null);
        }

        private void LogException(Exception exception)
        {
            if (exception != null)
            {
                //Logger.Exception(exception);
                //MonitoringService.TraceError();
            }
        }
    }
}