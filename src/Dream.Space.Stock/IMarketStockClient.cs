using System.Threading.Tasks;
using Dream.Space.Stock.Requests;

namespace Dream.Space.Stock
{
    public interface IMarketStockClient
    {
        Task<string> GetStockHistory(GetStockHistoryRequest request);
    }
}