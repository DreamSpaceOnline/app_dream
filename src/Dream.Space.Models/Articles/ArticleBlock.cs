using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Dream.Space.Models.Articles
{
    public class ArticleBlock
    {
        public bool Valid { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ArticleBlockType Type { get; set; }

        public string Text { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public HeadingType? HeadingType { get; set; }

        public string ImageUrl { get; set; }

        public IList<ArticleBlockItem> Items { get; set; }
    }

    public enum ArticleBlockType
    {
        Unset = 0,
        Paragraph = 1,
        Heading = 2,
        Image = 3,
        List = 4
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
