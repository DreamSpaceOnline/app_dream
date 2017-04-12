using System.Collections.Generic;
using System.Threading;
using Autofac;
using Dream.Space.Infrastructure.IoC;
using Dream.Space.Infrastructure.Processors;

namespace Dream.Space.App_Start
{

    public class BackgroundProcesses
    {
        private static BackgroundProcesses _instance = null;

        private BackgroundProcesses()
        {
        }


        public static void Register(IContainer container)
        {
            if (_instance == null)
            {
                _instance = new BackgroundProcesses();

                _instance.Launch();
            }
        }
        

        public void Stop()
        {
        }

        public void Launch()
        {
            var processors = IoCContainer.Instance.Container.Resolve<IEnumerable<IProcessor>>();

            foreach (var processor in processors)
            {
                processor.Start();
            }
        }

    }
}