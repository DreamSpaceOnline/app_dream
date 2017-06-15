using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dream.Space.Models.Articles
{
    public interface ICategoryEntity
    {
        int CategoryId { get; set; }
        string Title { get; set; }
        int OrderId { get; set; }
        string Url { get; set; }
        int SectionId { get; set; }
        bool Deleted { get; set; }
    }
}
