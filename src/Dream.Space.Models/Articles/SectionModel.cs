namespace Dream.Space.Models.Articles
{
    public class SectionModel
    {
        public SectionModel()
        {
            
        }

        public SectionModel(ISectionEntity section)
        {
            if (section != null)
            {
                SectionId = section.SectionId;
                Title = section.Title;
                Url = section.Url;
                OrderId = section.OrderId;
                IsDeleted = section.IsDeleted;
            }
        }

        public int SectionId { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public int OrderId { get; set; }
        public bool IsDeleted { get; set; }
    }
}