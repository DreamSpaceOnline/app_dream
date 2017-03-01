using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data.Enums;
using Dream.Space.Data.Services;
using NUnit.Framework;

namespace Dream.Space.Tests.Services
{
    [TestFixture]
    public class RuleServiceTests
    {
        private IRuleService _service;

        [SetUp]
        public void Setup()
        {
            _service = IoCContainer.Instance.Resolve<IRuleService>();
        }

        [Test]
        public async Task GetStrategyRuleSetsAsync()
        {
            var response = await _service.GetStrategyRuleSetsAsync(3, QuotePeriod.Daily);
        }
    }
}
