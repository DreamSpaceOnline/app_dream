using System;
using System.IO;
using System.Threading.Tasks;
using Dream.Space.Data.Models;

namespace Dream.Space.Data.Services
{
    public interface IArticleStorageService
    {
        Task<string> UploadImage(Stream fileStream, string fileName, FileCategory category);
        void DeleteImage(Uri url);
    }
}
