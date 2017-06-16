namespace Dream.Space.Models.Articles
{
    public class ArticleHeader
    {
        public ArticleHeader()
        {

        }

        public ArticleHeader(IArticleEntity article)
        {
            if (article != null)
            {
                ArticleId = article.ArticleId;
                Title = article.Title;
                Url = article.Url;
                CategoryId = article.CategoryId;
                OrderId = article.OrderId;
                IsFeatured = article.IsFeatured;
                Summary = article.Summary;
                Deleted = article.Deleted;
            }
        }

        public int ArticleId { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public string Summary { get; set; }
        public int CategoryId { get; set; }
        public int OrderId { get; set; }
        public bool IsFeatured { get; set; }
        public bool Deleted { get; set; }

    }

    public static class ArticleHeaderExtensions
    {
        public static ArticleHeader ToArticleHeader(this IArticleEntity article)
        {
            if (article == null) return null;

            return new ArticleHeader
            {
                ArticleId = article.ArticleId,
                Title = article.Title,
                Url = article.Url,
                CategoryId = article.CategoryId,
                OrderId = article.OrderId,
                IsFeatured = article.IsFeatured,
                Summary = article.Summary,
                Deleted = article.Deleted
            };
        }
    }
}
