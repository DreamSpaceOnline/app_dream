using Autofac;
using Dream.Space.Domain.ChartData;
using Dream.Space.Domain.ChartData.Requests;
using Dream.Space.Models.Enums;
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
            var response = _service.GetChartData(new GetChartDataRequest()
            {
                QuotePeriod = QuotePeriod.Daily,
                Ticker = "A"
            });
        }


       
    }
}
