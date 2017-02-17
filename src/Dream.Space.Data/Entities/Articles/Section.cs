using System.Collections.Generic;

namespace Dream.Space.Data.Entities.Articles
{
    public class Section
    {
        public int SectionId { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public int OrderId { get; set; }
        public List<Category> Categories { get; set; }
        public bool IsDeleted { get; set; }
    }
}
