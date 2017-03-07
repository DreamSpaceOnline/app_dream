using System;

namespace Dream.Space.Playground
{
    public class LoadPlaygroundRequest
    {
        public string Ticker { get; }
        public int StrategyId { get; }
        public bool RefreshCache { get; set; }

        public LoadPlaygroundRequest(string ticker, int strategyId, bool refreshCache = false)
        {
            Ticker = ticker;
            StrategyId = strategyId;
            RefreshCache = refreshCache;
        }
    }
}