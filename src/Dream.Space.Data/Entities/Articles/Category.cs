using System.Collections.Generic;

namespace Dream.Space.Data.Entities.Articles
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Title { get; set; }
        public int OrderId { get; set; }
        public string Url { get; set; }
        public int SectionId { get; set; }

        public List<Article> Articles { get; set; }
        public Section Section { get; set; }
        public bool Deleted { get; set; }
    }
}
