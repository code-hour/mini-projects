const { BatchExecuteStatementCommand } = require("@aws-sdk/client-dynamodb");

const { listTables, createTable} = require("./tables");

require("./initialize-schema");

// (async () => {
//   try {
//     console.log("Table creation started");
//     const results = await createTable(tableName = 'table_1');
//     console.log("Table created");
//     console.log(results);
//   } catch (err) {
//     const { requestId, cfId, extendedRequestId, attempts, httpStatusCode } = err.$metadata;
//     console.log({ requestId, cfId, extendedRequestId, attempts, httpStatusCode });
//     console.error(err);
//   }
// })();


// (async () => {
//   try {
//     const results = await listTables();
//     console.log("Available tables are below:");
//     console.log(results.TableNames.join("\n"));
//   } catch (err) {
//     const { requestId, cfId, extendedRequestId, attempts } = err.$metadata;
//     console.log({ requestId, cfId, extendedRequestId, attempts });
//     // console.error(err);
//   }
// })();

// listTables()
//   .then((results) => {
//     // process data.
//     console.log("Available tables are below:");
//     console.log(results.TableNames.join("\n"));
//   })
//   .catch((err) => {
//     // error handling.
//     const { requestId, cfId, extendedRequestId, attempts } = err.$metadata;
//     console.log({ requestId, cfId, extendedRequestId, attempts });
//     // console.error(err);
//   })
//   .finally(() => {
//     // finally.
//     console.error("I am done now");
//   });
