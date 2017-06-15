using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Autofac;
using Dream.Space.Data.Entities.Articles;
using Dream.Space.Data.Services;
using Dream.Space.Infrastructure.IoC;
using Dream.Space.Models.Articles;
using Newtonsoft.Json;

namespace Dream.Space.Controllers
{

    [RoutePrefix("api/article")]
    public class ArticlesApiController : ApiController
    {
        private readonly IArticleService _service;

        public ArticlesApiController(IArticleService articleService)
        {
            _service = articleService;
        }

        public ArticlesApiController()
        {
            _service = IoCContainer.Instance.Container.Resolve<IArticleService>();
        }

        [HttpGet]
        [Route("{id:int:min(1)}")]
        [ResponseType(typeof(ArticleModel))]
        public async Task<IHttpActionResult> GetArticle(int id)
        {
            var article = await _service.GetArticleAsync(id);
            return Ok(article);
        }

        [HttpPut]
        [Route("{id:int:min(1)}/order")]
        public async Task<IHttpActionResult> UpdateArticleOrder([FromBody] UpdateArticleOrderModel model)
        {
            await _service.UpdateArticleOrderAsync(model.ArticleId, model.OrderId);
            return Ok();
        }

        [HttpDelete]
        [Route("{id:int:min(1)}")]
        public async Task<IHttpActionResult> DeleteArticle(int id)
        {
            await _service.DeleteArticleAsync(id);
            return Ok();
        }

        [HttpDelete]
        [Route("category/{id:int:min(1)}")]
        public async Task<IHttpActionResult> DeleteCategory(int id)
        {
            await _service.DeleteCategoryAsync(id);
            return Ok();
        }

        [HttpGet]
        [Route("section/{sectionUrl}")]
        [ResponseType(typeof(SectionModel))]
        public async Task<IHttpActionResult> GetSection(string sectionUrl)
        {
            var section = await _service.GetSectionAsync(sectionUrl);
            return Ok(section);
        }

        [HttpGet]
        [Route("sections")]
        [ResponseType(typeof(List<SectionModel>))]
        public async Task<IHttpActionResult> GetSections()
        {
            var sections = await _service.GetSectionsAsync();
            return Ok(sections);
        }

        [HttpGet]
        [Route("{categoryId:int:min(1)}/featured")]
        [ResponseType(typeof(ArticleModel))]
        public async Task<IHttpActionResult> GetFeaturedArticle(int categoryId)
        {
            var article = await _service.GetFeaturedArticleAsync(categoryId);
            return Ok(article);
        }

        [HttpGet]
        [Route("url/{categoryId:int:min(1)}/{articleUrl}")]
        [ResponseType(typeof(ArticleModel))]
        public async Task<IHttpActionResult> GetArticleByUrl(int categoryId, string articleUrl)
        {
            var article = await _service.GetArticleAsync(categoryId, articleUrl);
            return Ok(article);
        }

        [HttpGet]
        [Route("{categoryId:int:min(1)}/all")]
        [ResponseType(typeof(List<ArticleHeader>))]
        public async Task<IHttpActionResult> GetArticles(int categoryId)
        {
            var articles = await _service.GetArticlesAsync(categoryId);
            return Ok(articles);
        }

        [HttpPost]
        [Route("{id:int:min(1)}/featured")]
        public async Task<IHttpActionResult> SetFeaturedArticle(int id)
        {
            await _service.SetFeaturedArticleAsync(id);
            return Ok();
        }

        [HttpGet]
        [Route("categories/{sectionId:int:min(1)}")]
        [ResponseType(typeof(List<CategoryModel>))]
        public async Task<IHttpActionResult> GetCategories(int sectionId)
        {
            var result = await _service.GetCategoriesAsync(sectionId);
            return Ok(result);
        }

        [HttpGet]
        [Route("category/{categoryUrl}")]
        [ResponseType(typeof(CategoryModel))]
        public async Task<IHttpActionResult> GetCategory(string categoryUrl)
        {
            var result = await _service.GetCategoryAsync(categoryUrl);
            return Ok(result);
        }

        [HttpPost]
        [Route("")]
        [ResponseType(typeof(ArticleModel))]
        public async Task<IHttpActionResult> SaveArticle([FromBody] ArticleModel model)
        {

            var article = await _service.SaveArticleAsync(model);
            return Ok(article);
        }

        [HttpPost]
        [Route("category")]
        [ResponseType(typeof(CategoryModel))]
        public async Task<IHttpActionResult> SaveCategory([FromBody] CategoryModel model)
        {
            var category = await _service.SaveCategoryAsync(model);

            return Ok(category);
        }

    }
}
