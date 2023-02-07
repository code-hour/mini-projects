const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const REGION = "us-east-1";
const clientConfig = {
  region: REGION,
  endpoint: "http://localhost:8000"
};

const client = new DynamoDBClient(clientConfig);

module.exports = client
