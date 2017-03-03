using System;
using System.Runtime.Caching;
using System.Threading.Tasks;

namespace Dream.Space.Cache
{
    public interface IDataCache
    {
        Task<T> Get<T>(string key, Func<Task<T>> func) where T : class;
        T Get<T>(string key, Func<T> func) where T : class;
        void Set<T>(string key, T data) where T : class;
        T Get<T>(string ke) where T : class;
        void Delete(string key);
    }

    public class DataCache : IDataCache
    {
        private readonly MemoryCache _cache;

        public DataCache()
        {
            _cache = MemoryCache.Default;
        }

        public async Task<T> Get<T>(string key, Func<Task<T>> func) where T: class
        {
            var data = _cache.Get(key) as T;
            if (data == null)
            {
                data = await func.Invoke();
                _cache.Add(key, data, DateTimeOffset.MaxValue);
            }

            return data;
        }

        public T Get<T>(string key, Func<T> func) where T : class
        {
            var data = _cache.Get(key) as T;
            if (data == null)
            {
                data = func.Invoke();
                _cache.Add(key, data, DateTimeOffset.MaxValue);
            }

            return data;
        }

        public void Set<T>(string key, T data) where T : class
        {
            Delete(key);
            _cache.Add(key, data, DateTimeOffset.MaxValue);
        }

        public void Delete(string key)
        {
            if (_cache.Contains(key))
            {
                _cache.Remove(key);
            }
        }

        public T Get<T>(string key) where T : class
        {
            var data = _cache.Get(key) as T;
            return data;
        }
    }
}