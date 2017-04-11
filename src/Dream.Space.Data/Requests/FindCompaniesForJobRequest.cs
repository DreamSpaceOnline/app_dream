namespace Dream.Space.Data.Requests
{
    public class FindCompaniesForJobRequest
    {
        public string JobId { get; set; }
        public int MaxRecordCount { get; set; }
        public int SectorId { get; set; }
        public bool SP500 { get; set; }
    }
}