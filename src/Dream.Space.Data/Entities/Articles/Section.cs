using System.Collections.Generic;
using Dream.Space.Models.Articles;

namespace Dream.Space.Data.Entities.Articles
{
    public class Section : ISectionEntity
    {
        public int SectionId { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public int OrderId { get; set; }
        public List<Category> Categories { get; set; }
        public bool IsDeleted { get; set; }
    }
}
