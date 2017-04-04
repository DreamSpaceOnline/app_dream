using System.Collections.Generic;
using System.Linq;
using Autofac;
using Dream.Space.Models.Calculators;
using Dream.Space.Models.Indicators;

namespace Dream.Space.Calculators.IndicatorProcessor
{
    public class CalculatorFactory
    {
        private readonly IEnumerable<IIndicatorCalculator> _calculators;

        public CalculatorFactory(ILifetimeScope container)
        {
            _calculators = container.Resolve<IEnumerable<IIndicatorCalculator>>();
        }

        public IIndicatorCalculator Create(IIndicatorEntity indicator)
        {
            return _calculators.FirstOrDefault(calculator => calculator.CanCalculate(indicator));
        }
    }
}