
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";
export async function main(event:any, context:any) {
  // const data = JSON.parse(event.body);
  // const params = {
  //   TableName: "dev-cities",
  //   Item: {
  //     userId: data.userId,
  //     noteId: data.noteId,
  //     content: data.content,
  //     attachment: data.attachment,
  //     createdAt: new Date().getTime()
  //   }
  // };
  // const params = {
  //   TableName: "dev-cities",
  //   Item: {
  //     userId: "djsnjkd",
  //     noteId: "djsj",
  //     content: "dnshcjahsbc",
  //     attachment: "hhshbbbb",
  //     createdAt: new Date().getTime()
  //   }
  // };

  try {
    console.log(params)
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    console.log("error happen when call the libs",e)
    return failure({ status: false });
  }
}






