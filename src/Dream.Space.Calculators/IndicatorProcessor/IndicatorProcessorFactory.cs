using System.Collections.Generic;
using System.Linq;
using Autofac;
using Dream.Space.Data.Entities.Indicators;

namespace Dream.Space.Calculators.IndicatorProcessor
{
    public class IndicatorProcessorFactory
    {
        private readonly IEnumerable<IIndicatorCalculator> _calculators;

        public IndicatorProcessorFactory(ILifetimeScope container)
        {
            _calculators = container.Resolve<IEnumerable<IIndicatorCalculator>>();
        }

        public IIndicatorCalculator Create(Indicator indicator)
        {
            return _calculators.FirstOrDefault(calculator => calculator.CanCalculate(indicator));
        }
    }
}