namespace Dream.Space.Data.Entities.Companies
{
    public class CompanyIndustry
    {
        public int InductryId { get; set; }
        public int SectorId { get; set; }
        public string IndustryName { get; set; }
        public CompanySector Sector { get; set; }
    }
}