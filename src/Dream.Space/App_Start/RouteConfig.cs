using System.Web.Mvc;
using System.Web.Routing;

namespace Dream.Space
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("{assets}", new { assets = @".*\.(css|js|gif|jpg)(/.)?" });
            routes.IgnoreRoute("api/{endpoints}");
            routes.IgnoreRoute("hangfire*");

            routes.MapRoute(
                name: "HealthCheck",
                url: "health/{action}",
                defaults: new { controller = "Health", action = "Check" }
            );
  
            routes.MapRoute(
                name: "AureliaRouting",
                url: "{*url}",
                defaults: new { controller = "Index", action = "Index" }
            );
        }
    }
}
