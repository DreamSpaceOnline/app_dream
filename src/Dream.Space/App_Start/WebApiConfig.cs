using System.Web.Http;
using Autofac.Integration.WebApi;
using Dream.Space.Attributes;
using Dream.Space.Infrastructure.IoC;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace Dream.Space
{
    public class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();
            config.DependencyResolver = new AutofacWebApiDependencyResolver(IoCContainer.Instance.Container);

            config.Routes.MapHttpRoute(
                name: "DefaultApi2",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Filters.Add(new LogActionAttribute());
            config.Filters.Add(new ErrorLoggerFilterAttribute());

            var stringEnumConverter = new StringEnumConverter
            {
                AllowIntegerValues = false,
                CamelCaseText = true
            };

            var settings = config.Formatters.JsonFormatter.SerializerSettings;
            settings.Formatting = Formatting.Indented;
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            settings.Converters.Add(stringEnumConverter);
        }
    }
}