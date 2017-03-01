using System.Threading.Tasks;
using Autofac;
using Dream.Space.Controllers;
using NUnit.Framework;

namespace Dream.Space.Tests.Controllers
{
    [TestFixture]
    public class PlaygroundApiControllerTests
    {
        private PlaygroundApiController _controller;

        [SetUp]
        public void Setup()
        {
            _controller = IoCContainer.Instance.Resolve<PlaygroundApiController>();
        }

        [Test]
        public async Task LoadPlayground()
        {
            await _controller.LoadPlayground("A", 3, 100);


            
        }
    }
}
