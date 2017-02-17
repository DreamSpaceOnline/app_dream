using Dream.Space.Domain.ChartData.Models;
using Dream.Space.Domain.ChartData.Requests;

namespace Dream.Space.Domain.ChartData
{
    public interface IChartDataService
    {
        ChartDataResult GetChartData(GetChartDataRequest request);
    }
}
