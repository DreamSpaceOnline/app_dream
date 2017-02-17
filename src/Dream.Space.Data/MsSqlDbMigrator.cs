using System.Data.Entity.Migrations;
using System.Linq;

namespace Dream.Space.Data
{
    public class MsSqlDbMigrator
    {
        public static void UpgradeDatabase()
        {
            var dbMigrator = new DbMigrator(new Migrations.Configuration());

            if (dbMigrator.GetPendingMigrations().Any())
            {
                dbMigrator.Update();
            }
        }
    }
}
