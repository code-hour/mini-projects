const {ScalarAttributeType, KeyType} = require("@aws-sdk/client-dynamodb");
const {createTable} = require("../tables");

const someNameTableParams = {
  TableName : "some_name",
  AttributeDefinitions: [{
    AttributeName: "id",
    AttributeType: ScalarAttributeType.S,
  }, {
    AttributeName: "name",
    AttributeType: ScalarAttributeType.S,
  }],
  KeySchema: [{
    AttributeName: "id",
    KeyType: KeyType.HASH,
  }, {
    AttributeName: "name",
    KeyType: KeyType.RANGE,
  }],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 5,
  },
  create: async () => {
    try {
      const result = await createTable(
        tableName = someNameTableParams.TableName,
        schema = someNameTableParams.KeySchema,
        attributes = someNameTableParams.AttributeDefinitions,
        provisionedThroughput = someNameTableParams.ProvisionedThroughput);

      // process data.
      console.log("Table created");
      const { requestId, cfId, extendedRequestId, attempts, httpStatusCode } = result.$metadata;
      const { TableArn } = result.TableDescription
      console.log({ requestId, cfId, extendedRequestId, attempts, httpStatusCode, TableArn });
    } catch(err) {
      // error handling.
      const { requestId, cfId, extendedRequestId, attempts, httpStatusCode } = err.$metadata;
      console.log({ requestId, cfId, extendedRequestId, attempts, httpStatusCode });
      console.error(err);
    }
  }
};

module.exports = someNameTableParams;
