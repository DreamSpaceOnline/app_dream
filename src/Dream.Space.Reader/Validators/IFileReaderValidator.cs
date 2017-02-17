namespace Dream.Space.Reader.Validators
{
    public interface IFileReaderValidator
    {
        void Validate<TClassMap, TClassModel>(string filePath) where TClassMap : CsvHelper.Configuration.CsvClassMap;
    }
}