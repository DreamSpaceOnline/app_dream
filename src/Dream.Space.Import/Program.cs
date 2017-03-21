using Autofac;
using Dream.Space.Import.Jobs;

namespace Dream.Space.Import
{
    class Program
    {
        static void Main(string[] args)
        {
            var job = IoCContainer.Instance.Resolve<IQuotesImportJob>();
            job.Start();
        }
    }
}
