namespace Dream.Space.Models.Charts
{
    public class ResultStatus
    {
        public string Message { get; set; }
        public StatusCode StatusCode { get; set; }
    }

    public enum StatusCode
    {
        Ok,
        Warn,
        Error
    }
}