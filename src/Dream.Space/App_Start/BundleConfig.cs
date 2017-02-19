using System.Web.Optimization;

namespace Dream.Space
{
    public static class BundleConfig
    {
        public static void ConfigureBundle()
        {
            BundleTable.Bundles.Add(new StyleBundle("~/Content/styles")
                .Include("~/Content/bootstrap.css")
                .Include("~/Content/toastr.css"));

            BundleTable.EnableOptimizations = true;
        }
    }
}
