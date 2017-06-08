using System.Collections.Generic;
using Dream.Space.Data.Entities.Articles;
using Newtonsoft.Json;

namespace Dream.Space.Models.Articles
{
    public class ArticleModel
    {
        public int ArticleId { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public string Url { get; set; }
        public int CategoryId { get; set; }
        public int OrderId { get; set; }
        public List<ArticleBlock> Blocks { get; set; }
        public bool IsFeatured { get; set; }
        public bool Deleted { get; set; }

        public ArticleModel()
        {

        }

        public ArticleModel(Article article)
        {
            if (article != null)
            {
                ArticleId = article.ArticleId;
                Title = article.Title;
                Url = article.Url;
                CategoryId = article.CategoryId;
                OrderId = article.OrderId;
                Blocks = JsonConvert.DeserializeObject<List<ArticleBlock>>(article.JsonArticleBlocks);
                Deleted = article.Deleted;
            }
        }


    }
}