using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Data.Entities.Articles;
using Dream.Space.Data.Repositories;
using Dream.Space.Models.Articles;
using Newtonsoft.Json;

namespace Dream.Space.Data.Services
{
    public class ArticleService: IArticleService
    {
        private readonly ILifetimeScope _container;

        public ArticleService(ILifetimeScope container)
        {
            _container = container;
        }


        public async Task<ArticleModel> GetArticleAsync(int id)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IArticleRepository>();
                var entity = await repository.GetAsync(id);
                if (entity != null)
                {
                    return new ArticleModel(entity);
                }
                return null;
            }
        }

        public async Task<ArticleModel> SaveArticleAsync(ArticleModel article)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                Article record;
                var repository = scope.Resolve<IArticleRepository>();

                if (article.ArticleId == 0)
                {
                    record = repository.Add(new Article());
                }
                else
                {
                    record = await repository.GetAsync(article.ArticleId);
                }

                if (record != null)
                {
                    record.CategoryId = article.CategoryId;
                    record.Title = article.Title;
                    record.Url = article.Url;
                    record.JsonArticleBlocks = JsonConvert.SerializeObject(article.ArticleBlocks);

                    await repository.CommitAsync();
                }

                return new ArticleModel(record);
            }
        }


        public async Task<CategoryModel> SaveCategoryAsync(CategoryModel category)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                Category record;
                var repository = scope.Resolve<ICategoryRepository>();

                if (category.CategoryId == 0)
                {
                    record = repository.Add(new Category());
                }
                else
                {
                    record = await repository.GetAsync(category.CategoryId);
                }

                if (record != null)
                {
                    record.SectionId = category.SectionId;
                    record.Title = category.Title;
                    record.Url = category.Url;
                    record.OrderId = category.OrderId;

                    await repository.CommitAsync();
                }

                return new CategoryModel(record);
            }
        }

        public async Task<ArticleModel> GetFeaturedArticleAsync(int categoryId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IArticleRepository>();
                var record = await repository.GetFeaturedAsync(categoryId, true);
                if (record != null)
                {
                    return new ArticleModel(record);
                }
                return null;
            }
        }

        public async Task SetFeaturedArticleAsync(int id)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IArticleRepository>();
                var record = await repository.GetAsync(id);
                if (record != null)
                {
                    await repository.SetFeaturedAsync(id, record.CategoryId);
                }
            }
        }

        public async Task<List<CategoryModel>> GetCategoriesAsync(int sectionId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ICategoryRepository>();
                var records = await repository.GetBySectionIdAsync(sectionId);
                if (records != null)
                {
                    return records.Select(c => new CategoryModel(c)).OrderBy(r => r.OrderId).ToList();
                }
                return new List<CategoryModel>();
            }
        }

        public async Task<SectionModel> GetSectionAsync(string sectionUrl)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ISectionRepository>();
                var record = await repository.GetAsync(sectionUrl);
                if (record != null)
                {
                    return new SectionModel(record);
                }
                return null;
            }
        }

        public async Task<List<SectionModel>> GetSectionsAsync()
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ISectionRepository>();
                var records = await repository.GetAsync(false);

                if (records != null)
                {
                    return records.Select(c => new SectionModel(c)).OrderBy(r => r.OrderId).ToList();
                }
                return new List<SectionModel>();
            }
        }

        public async Task<CategoryModel> GetCategoryAsync(string categoryUrl)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ICategoryRepository>();
                var record = await repository.GetAsync(categoryUrl, true);

                if (record != null)
                {
                    return new CategoryModel(record);
                }
                return null;
            }
        }

        public async Task<List<ArticleHeader>> GetArticlesAsync(int categoryId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IArticleRepository>();
                var records = await repository.GetByCategoryAsync(categoryId);
                return records;
            }
        }

        public async Task<ArticleModel> GetArticleAsync(int categoryId, string articleUrl)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IArticleRepository>();
                var record = await repository.GetByCategoryAsync(categoryId, articleUrl);
                if (record != null)
                {
                    return new ArticleModel(record);
                }
                return null;
            }
        }

        public async Task DeleteArticleAsync(int id)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IArticleRepository>();
                var record = await repository.GetAsync(id);
                if (record != null)
                {
                    record.Deleted = true;
                    await repository.CommitAsync();
                }
            }
        }

        public async Task UpdateArticleOrderAsync(int articleId, int orderId)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<IArticleRepository>();
                var record = await repository.GetAsync(articleId);
                if (record != null)
                {
                    record.OrderId = orderId;
                    await repository.CommitAsync();
                }
            }
        }

        public async Task DeleteCategoryAsync(int id)
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                var repository = scope.Resolve<ICategoryRepository>();
                var record = await repository.GetAsync(id);
                if (record != null)
                {
                    repository.Delete(record);
                    await repository.CommitAsync();
                }
            }
        }
    }
}
