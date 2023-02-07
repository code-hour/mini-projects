# Nodejs DynamoDB sample app

## Getting Started

### Prerequisite

```sh
# Spin up local dynamoDB instatnce
$ docker-compose up -d

# Verify connection
$ aws dynamodb list-tables --endpoint-url http://localhost:8000
```

## Data Cleanup

```sh
# Delete a table
aws dynamodb delete-table --table-name some_name --endpoint-url http://localhost:8000
```

## References

* Docker Hub [DynamoDB Local](https://hub.docker.com/r/amazon/dynamodb-local)
* AWS Docs : [Deploying DynamoDB locally on your computer](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)
* AWS Developer Guide : [AWS SDK for JavaScript](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
* AWS Developer Guide : [DynamoDB Cheatsheet](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/CheatSheet.html)
* AWS Docs : [AWS SDK for JavaScript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html)
* GitHub Sample : [aws-sam-java-rest](https://github.com/aws-samples/aws-sam-java-rest)
* [Tutorial](https://medium.com/platform-engineer/running-aws-dynamodb-local-with-docker-compose-6f75850aba1e)
