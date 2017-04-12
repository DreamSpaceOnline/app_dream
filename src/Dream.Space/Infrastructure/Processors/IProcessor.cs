using System.Threading;
using System.Threading.Tasks;

namespace Dream.Space.Infrastructure.Processors
{

    public interface IProcessor
    {
        void Start();
        void Stop();
        string Name { get; }
    }
}
