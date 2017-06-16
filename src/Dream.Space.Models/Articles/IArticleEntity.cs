namespace Dream.Space.Models.Articles
{
    public interface IArticleEntity
    {
        int ArticleId { get; set; }
        string Title { get; set; }
        string Url { get; set; }
        string Summary { get; set; }
        int CategoryId { get; set; }
        int OrderId { get; set; }
        string JsonArticleBlocks { get; set; }
        bool IsFeatured { get; set; }
        bool Deleted { get; set; }
    }


}