using System;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
using Dream.Space.IoC;
using NLog;

namespace Dream.Space
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            IoCContainer.Instance.Register();
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.ConfigureBundle();
            WebApiConfig.Register(GlobalConfiguration.Configuration);

            CertificateConfig.IgnoreCertificateErrors();
            GlobalConfiguration.Configuration.EnsureInitialized();
        }

        protected void Application_Error(object sender, EventArgs e)
        {
            var error = Server.GetLastError();
            var logger = LogManager.GetCurrentClassLogger();
            logger.Error($"Message:{error.Message}, Stack trace:{error.StackTrace}");
        }
    }
}
