using System;

namespace Dream.Space.Reader.Exceptions
{
    public class FileReaderValidatorException : Exception
    {
        public FileReaderValidatorException(string message)
            : base(message)
        {
        }
    }
}
