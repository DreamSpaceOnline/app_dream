using System;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http.Filters;

namespace Dream.Space.Attributes
{
    public class LogActionAttribute : ActionFilterAttribute
    {
        //[Inject]
        //public ILogger Logger { get; set; }

        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            LogAction(actionExecutedContext);
        }

        public override Task OnActionExecutedAsync(HttpActionExecutedContext actionExecutedContext, CancellationToken cancellationToken)
        {
            LogAction(actionExecutedContext);
            return Task.FromResult<object>(null);
        }

        private void LogAction(HttpActionExecutedContext actionExecutedContext)
        {
            try
            {
                var identity = actionExecutedContext.ActionContext.RequestContext.Principal.Identity;

                if (!identity.IsAuthenticated)
                    return;

                var actionContext = actionExecutedContext.ActionContext;
                //Logger.Debug($"User:{identity.Name} Action:{actionContext.ControllerContext.ControllerDescriptor.ControllerName}/{actionContext.ActionDescriptor.ActionName}");
            }
            catch (Exception ex)
            {
                //Don't let logging break the application
                //Logger.Exception(ex, "Error occurred logging user action");
            }
        }
    }
}