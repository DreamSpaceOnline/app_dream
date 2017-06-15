using System.Collections.Generic;
using System.Threading.Tasks;
using Dream.Space.Models.Articles;

namespace Dream.Space.Data.Services
{
    public interface IArticleService
    {
        Task<ArticleModel> GetArticleAsync(int articleId);
        Task<ArticleModel> SaveArticleAsync(ArticleModel article);
        Task<CategoryModel> SaveCategoryAsync(CategoryModel category);
        Task<ArticleModel> GetFeaturedArticleAsync(int categoryId);
        Task SetFeaturedArticleAsync(int articleId);
        Task<List<CategoryModel>> GetCategoriesAsync(int sectionId);
        Task<SectionModel> GetSectionAsync(string sectionUrl);
        Task<List<SectionModel>> GetSectionsAsync();
        Task<CategoryModel> GetCategoryAsync(string categoryUrl);
        Task<List<ArticleHeader>> GetArticlesAsync(int categoryId);
        Task<ArticleModel> GetArticleAsync(int categoryId, string articleUrl);
        Task DeleteArticleAsync(int articleId);
        Task UpdateArticleOrderAsync(int articleId, int orderId);
        Task DeleteCategoryAsync(int categoryId);

    }
}
