using System.Web.Mvc;
using Dream.Space.Attributes;
using Dream.Space.Infrastructure.ErrorHandler;

namespace Dream.Space
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new AiHandleErrorAttribute());
        }
    }
}