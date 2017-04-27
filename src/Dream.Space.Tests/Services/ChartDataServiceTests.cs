using Autofac;
using Dream.Space.Data.Services;
using NUnit.Framework;

namespace Dream.Space.Tests.Services
{
    [TestFixture]
    public class ChartDataServiceTests
    {
        private IChartDataService _service;

        [SetUp]
        public void Setup()
        {
            _service = IoCContainer.Instance.Resolve<IChartDataService>();
        }

        [Test]
        public void GetData_()
        {

        }


       
    }
}
