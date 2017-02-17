using System;
using System.IO;
using System.Threading.Tasks;
using Dream.Space.Data.Azure;
using Dream.Space.Data.Models;

namespace Dream.Space.Data.Services
{
    public class ArticleStorageService : IArticleStorageService
    {
        private readonly IStorageClient _storageClient;

        public ArticleStorageService(IStorageClient storageClient)
        {
            _storageClient = storageClient;
        }

        public async Task<string> UploadImage(Stream fileStream, string fileName, FileCategory category)
        {
            if (fileStream != null && fileStream.Length > 0)
            {
                var url = await _storageClient.UploadFile(BlobContainer.Images, fileName, category.ToString().ToLower(),
                    fileStream);

                return url;
            }
            return String.Empty;
        }

        public void DeleteImage(Uri url)
        {
            _storageClient.DeleteFile(BlobContainer.Images, url.PathAndQuery);
        }
    }
}