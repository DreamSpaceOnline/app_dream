using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data.Extensions;
using Dream.Space.Playground;
using Dream.Space.Reader.Models;
using NUnit.Framework;

namespace Dream.Space.Tests.Services
{
    [TestFixture]
    public class PlaygroundServiceTests
    {
        private IPlaygroundService _service;
        private List<QuotesModel> _quotes;
        private IEnumerable<QuotesModel> _weeklyQuotes;
        private List<QuotesModel> _dailyQuotes;


        [OneTimeSetUp]
        public async Task OneTimeSetUp()
        {
            _service = IoCContainer.Instance.Resolve<IPlaygroundService>();
            _quotes = await _service.LoadHistoryAsync("A");
        }

        [SetUp]
        public void Init()
        {
            var bars = 100;

            _weeklyQuotes = _quotes.ToWeeekly().Take(bars);
            _dailyQuotes = _quotes.Where(q => q.Date <= _weeklyQuotes.First().Date).Take(bars).ToList();
        }

        [Test]
        public void MoveNext()
        {
            var count = _dailyQuotes.Count;

            Assert.That(true);
        }
    }
}
