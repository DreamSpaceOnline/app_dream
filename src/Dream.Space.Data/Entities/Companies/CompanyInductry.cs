namespace Dream.Space.Data.Entities.Companies
{
    public class CompanyInductry
    {
        public int InductryId { get; set; }
        public int SectorId { get; set; }
        public string InductryName { get; set; }
        public CompanySector Sector { get; set; }
    }
}