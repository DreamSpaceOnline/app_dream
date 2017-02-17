using System.Net;

namespace Dream.Space
{
    public class CertificateConfig
    {
        public static void IgnoreCertificateErrors()
        {
            ServicePointManager.ServerCertificateValidationCallback += (sender, cert, chain, sslPolicyErrors) => true;
        }
    }
}