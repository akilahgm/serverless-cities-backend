import * as AWS from "aws-sdk";

export async function call(action:any, params:any) {
  console.log("DynamoDB service work",params)
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const output:any = await dynamoDb[action](params).promise();
  console.log("test dynamodb libs",output)
  return output;
}
