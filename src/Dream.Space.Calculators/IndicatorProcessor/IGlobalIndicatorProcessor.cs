using System.Collections.Generic;
using Dream.Space.Reader.Models;
using Newtonsoft.Json;

namespace Dream.Space.Calculators.IndicatorProcessor
{
    public interface IGlobalIndicatorProcessor
    {
        void Process(int sectorId);
    }


    public class GlobalIndicatorProcessor
    {
        public void Process(int sectorId)
        {

            //var companyIndicators = _companyIndicatorService.GetIndicators(ticker);
            //foreach (var indicator in _indicators)
            //{
            //    var processor = _processorFactory.Create(indicator);
            //    var data = processor?.Calculate(indicator, quotes);

            //    if (data != null && data.Any())
            //    {
            //        _companyIndicatorService.Update(ticker, JsonConvert.SerializeObject(data), indicator);
            //    }
            //}
        }
    }
}
