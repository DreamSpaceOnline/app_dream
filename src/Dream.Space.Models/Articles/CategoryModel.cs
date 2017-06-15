namespace Dream.Space.Models.Articles
{
    public class CategoryModel
    {

        public CategoryModel()
        {
            
        }

        public CategoryModel(ICategoryEntity category)
        {
            if (category != null)
            {
                CategoryId = category.CategoryId;
                Title = category.Title;
                OrderId = category.OrderId;
                Url = category.Url;
                SectionId = category.SectionId;
                Deleted = category.Deleted;
            }
        }

        public int CategoryId { get; set; }
        public string Title { get; set; }
        public int OrderId { get; set; }
        public string Url { get; set; }
        public int SectionId { get; set; }
        public bool Deleted { get; set; }
    }
}
