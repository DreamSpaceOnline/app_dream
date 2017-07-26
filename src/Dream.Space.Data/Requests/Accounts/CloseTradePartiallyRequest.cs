namespace Dream.Space.Data.Requests.Accounts
{
    public class CloseTradePartiallyRequest: CloseTradeRequest
    {
        public int SharesCount { get; set; }
    }
}