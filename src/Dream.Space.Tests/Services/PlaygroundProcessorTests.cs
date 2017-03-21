using System;
using System.Linq;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data.Extensions;
using Dream.Space.Playground;
using NUnit.Framework;

namespace Dream.Space.Tests.Services
{
    [TestFixture]
    public class PlaygroundProcessorTests
    {
        private PlaygroundConfiguration _configuration;
        private DateTime _currentDate;
        private PlaygroundProcessor _playgroundProcessor;

        [OneTimeSetUp]
        public async Task OneTimeSetUp()
        {
            var loader = IoCContainer.Instance.Resolve<PlaygroundConfigurationLoader>();
            _configuration = await loader.Load("A", 3);
        }

        [SetUp]
        public void Init()
        {
            const int bars = 100;
            _currentDate = _configuration.Quotes.ToWeeekly().TakeLast(bars).First().Date;

            _playgroundProcessor = new PlaygroundProcessor(_configuration);
            _playgroundProcessor.Initialize(_currentDate, bars);
        }

        [Test]
        public void MoveNext()
        {
            var data = _playgroundProcessor.MoveNext();
            Assert.That(true);
        }

        [Test]
        public void MovePrev()
        {
            var data = _playgroundProcessor.MovePrev();
            Assert.That(true);
        }

        [Test]
        public void Reset()
        {
            var data = _playgroundProcessor.Reset();
            Assert.That(true);
        }
    }
}
