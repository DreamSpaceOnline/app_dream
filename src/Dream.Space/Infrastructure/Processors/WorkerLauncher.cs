using System.Collections.Generic;
using System.Threading;
using Autofac;
using Dream.Space.Infrastructure.IoC;

namespace Dream.Space.Infrastructure.Processors
{
    public class WorkerLauncher
    {
        private readonly CancellationTokenSource _cancellationTokenSource;

        public bool Started { get; private set; }

        public WorkerLauncher()
        {
            _cancellationTokenSource = new CancellationTokenSource();
        }

        public void Stop()
        {
            _cancellationTokenSource.Cancel();
        }

        public void Launch()
        {
            var processors = IoCContainer.Instance.Container.Resolve<IEnumerable<IProcessor>>();

            foreach (var processor in processors)
            {
                processor.Start(_cancellationTokenSource.Token);
            }
            Started = true;
        }
    }
}