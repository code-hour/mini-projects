const { ListTablesCommand, CreateTableCommand, PutItemCommand, GetItemCommand} = require("@aws-sdk/client-dynamodb");
const client = require("./client");

const listTablesCommand = new ListTablesCommand({
  // ExclusiveStartTableName: "xx",
  Limit: 2,
});

const createTableCommand = new CreateTableCommand({});

module.exports = {
  createTable: async (
    tableName = undefined,
    schema = undefined,
    attributes = undefined,
    provisionedThroughput = undefined) => {
    createTableCommand.input.TableName = tableName;
    if (schema) {
      createTableCommand.input.KeySchema = schema;
    }
    if (attributes) {
      createTableCommand.input.AttributeDefinitions = attributes;
    }
    if (provisionedThroughput) {
      createTableCommand.input.ProvisionedThroughput = provisionedThroughput;
    }
    return client.send(createTableCommand);
  },
  putItem: async (tableName = undefined, item = undefined) => {
    return client.send(new PutItemCommand({
      TableName: tableName,
      Item: item,
    }));
  },
  getItem: async (tableName = undefined, key = undefined) => {
    return client.send(new GetItemCommand({
      TableName: tableName,
      Key: key,
    }));
  },
  listTables: async (limit) => {
    if (limit) {
      listTablesCommand.input.Limit = limit;
    }
    return client.send(listTablesCommand);
  }
}
