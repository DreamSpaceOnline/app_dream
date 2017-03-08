﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Autofac;
using Dream.Space.Import.CompanyImport;

namespace Dream.Space.Import
{
    class Program
    {
        static void Main(string[] args)
        {
            var job = IoCContainer.Instance.Resolve<ICompanyImportJob>();
            job.Start();
        }
    }
}