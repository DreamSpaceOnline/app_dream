﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Calculators.IndicatorProcessor;
using Dream.Space.Data.Entities.Indicators;
using Dream.Space.Data.Extensions;
using Dream.Space.Playground;
using Dream.Space.Playground.Models;
using Dream.Space.Reader.Models;
using NUnit.Framework;

namespace Dream.Space.Tests.Services
{
    [TestFixture]
    public class PlaygroundServiceTests
    {
        private IPlaygroundService _service;
        private List<QuotesModel> _quotes;
        private DateTime _currentDate;
        private PlaygroundProcessor _playgroundProcessor;
        private List<Indicator> _indicators;
        private IndicatorProcessorFactory _indicatorProcessorFactory;

        [OneTimeSetUp]
        public async Task OneTimeSetUp()
        {
            _service = IoCContainer.Instance.Resolve<IPlaygroundService>();
            _indicatorProcessorFactory = IoCContainer.Instance.Resolve<IndicatorProcessorFactory>();

            _quotes = await _service.LoadHistoryAsync("A");
            _indicators = await _service.LoadIndicatorsAsync(3);
        }

        [SetUp]
        public void Init()
        {
            const int bars = 100;
            _currentDate = _quotes.ToWeeekly().TakeLast(bars).First().Date;
            _playgroundProcessor = new PlaygroundProcessor(new CompanyInfo(),  _quotes, _indicators, _indicatorProcessorFactory, bars);
            _playgroundProcessor.Initialize(_currentDate);
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
