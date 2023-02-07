const { listTables } = require("./tables");
const someNameTableParams = require("./schema/some-name");
const seedSomeName = require("./seed/some-name");

/**
 * Create tables if not exists already
 */
(async () => {
  const tables = await listTables();

  if (!tables.TableNames.includes(someNameTableParams.TableName)) {
    await someNameTableParams.create();
    await seedSomeName(count = 9);
  }
})();
