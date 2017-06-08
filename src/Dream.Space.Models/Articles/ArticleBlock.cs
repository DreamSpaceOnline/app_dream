using System.Collections.Generic;

namespace Dream.Space.Models.Articles
{
    public class ArticleBlock
    {
        public bool Valid { get; set; }
        public ArticleBlockType BlockType { get; set; }
        public string Text { get; set; }
        public HeadingType? HeadingType { get; set; }
        public string ImageUrl { get; set; }

        public IList<ArticleBlockItem> Items { get; set; }
    }

    public enum ArticleBlockType
    {
       Paragraph, Heading, Image, List, Unset
    }

    public enum HeadingType
    {
        H1, H2, H3, H4, H5
    }

    public class ArticleBlockItem
    {
        public string Text { get; set; }
        public bool Valid { get; set; }

    }
}
