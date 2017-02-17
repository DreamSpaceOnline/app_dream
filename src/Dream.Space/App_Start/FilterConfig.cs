using System.Web.Mvc;
using Dream.Space.Attributes;

namespace Dream.Space
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}