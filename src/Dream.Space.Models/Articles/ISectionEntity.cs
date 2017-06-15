namespace Dream.Space.Models.Articles
{
    public interface ISectionEntity
    {
        int SectionId { get; set; }
        string Title { get; set; }
        string Url { get; set; }
        int OrderId { get; set; }
        bool IsDeleted { get; set; }
    }
}
