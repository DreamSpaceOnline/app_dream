using Dream.Space.Models.Articles;

namespace Dream.Space.Data.Entities.Articles
{
    public class Article: IArticleEntity
    {
        public int ArticleId { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public string Url { get; set; }
        public int CategoryId { get; set; }
        public int OrderId { get; set; }
        public string JsonArticleBlocks { get; set; }

        public Category Category { get; set; }
        public bool IsFeatured { get; set; }
        public bool Deleted { get; set; }
    }
}
