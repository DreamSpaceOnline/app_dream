using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Linq;

namespace Dream.Space.Infrastructure.Settings
{
    public class AppSettingsWrapper : IAppSettings
    {
        private readonly NameValueCollection _settings;

        public AppSettingsWrapper()
        {
            _settings = ConfigurationManager.AppSettings;
        }

        public string GetValue(string key)
        {
            return GetValue<string>(key);
        }

        public T GetValue<T>(string key)
        {
            var rawSetting = _settings[key];

            if (rawSetting == null)
                throw new ApplicationException("Calling code requested AppSetting " + key + " but it was not in the config file.");

            return (T)Convert.ChangeType(rawSetting, typeof(T));
        }

        public T GetValue<T>(string key, T defaultValue)
        {
            var rawSetting = _settings[key];

            if (rawSetting == null)
                return defaultValue;

            return (T)Convert.ChangeType(rawSetting, typeof(T));
        }

        public T GetEnumValue<T>(string key, T defaultValue) where T : struct, IConvertible
        {
            try
            {
                var rawSetting = _settings[key];
                return GetEnumFromString<T>(rawSetting);
            }
            catch (Exception)
            {
                return defaultValue;
            }
        }

        public T GetEnumValue<T>(string key) where T : struct, IConvertible
        {
            var rawSetting = _settings[key];
            return GetEnumFromString<T>(rawSetting);
        }

        public IEnumerable<string> GetListValue(string key)
        {
            return GetListValue<string>(key);
        }

        public IEnumerable<T> GetListValue<T>(string key)
        {
            var rawSetting = _settings[key];

            if (rawSetting == null)
                throw new ApplicationException("Calling code requested AppSetting " + key + " but it was not in the config file.");

            return rawSetting.Split(';').Select(s => (T)Convert.ChangeType(s, typeof(T)));
        }

        public IEnumerable<T> GetEnumListValue<T>(string key) where T : struct, IConvertible
        {
            var rawSetting = _settings[key];

            var result = new List<T>();

            foreach (var s in rawSetting.Split(';'))
            {
                try
                {
                    result.Add(GetEnumFromString<T>(s));
                }
                catch (Exception)
                {
                    // ignored
                }
            }
            return result;
        }

        private static T GetEnumFromString<T>(string value) where T : struct, IConvertible
        {
            T result;
            if (Enum.TryParse(value, true, out result))
                return result;
            throw new ApplicationException("Could not convert value " + value + " to " + typeof(T).Name + ".");
        }
    }
}