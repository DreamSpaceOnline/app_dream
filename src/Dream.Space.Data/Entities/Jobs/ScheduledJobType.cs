namespace Dream.Space.Data.Entities.Jobs
{
    public enum ScheduledJobType
    {
        All = 0,

        RefreshAllStocks = 1,
        RefreshSP500Stocks = 2,
        CalculateGlobalIndicators = 3
    }
}