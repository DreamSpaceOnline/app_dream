using System.Collections.Generic;
using Newtonsoft.Json;

namespace Dream.Space.Models.Articles
{
    public class ArticleModel : ArticleHeader
    {
        public ArticleModel()
        {
            ArticleBlocks = new List<ArticleBlock>();
        }

        public ArticleModel(IArticleEntity article): base(article)
        {
            ArticleBlocks = new List<ArticleBlock>();
            if (!string.IsNullOrWhiteSpace(article.JsonArticleBlocks))
            {
                ArticleBlocks = JsonConvert.DeserializeObject<List<ArticleBlock>>(article.JsonArticleBlocks);
            }
        }
        public IList<ArticleBlock> ArticleBlocks { get; set; }
    }
}