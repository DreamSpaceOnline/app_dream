namespace Dream.Space.Domain.ChartData.Models
{
    public class ChartDataResult : DataResult<ChartDataModel>
    {
        public ChartDataResult()
        {
            Result = new ChartDataModel();
        }
    }
}