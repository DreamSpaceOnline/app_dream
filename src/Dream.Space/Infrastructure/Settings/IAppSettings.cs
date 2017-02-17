using System;
using System.Collections.Generic;

namespace Dream.Space.Infrastructure.Settings
{
    public interface IAppSettings
    {
        string GetValue(string key);
        T GetValue<T>(string key);
        T GetValue<T>(string key, T defaultValue);
        T GetEnumValue<T>(string key, T defaultValue) where T : struct, IConvertible;
        T GetEnumValue<T>(string key) where T : struct, IConvertible;
        IEnumerable<string> GetListValue(string key);
        IEnumerable<T> GetListValue<T>(string key);
        IEnumerable<T> GetEnumListValue<T>(string key) where T : struct, IConvertible;
    }
}
