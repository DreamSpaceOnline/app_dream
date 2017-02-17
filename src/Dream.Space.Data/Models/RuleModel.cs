namespace Dream.Space.Data.Models
{
    public class RuleModel
    {
        public string Name { get; set; }
        public int RuleId { get; set; }
        public int RuleSetId { get; set; }
        public int OrderId { get; set; }
        public string Description { get; set; }
        public bool Deleted { get; set; }
    }
}
