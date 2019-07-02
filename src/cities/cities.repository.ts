import { City } from './cities.interfaces';
import * as dynamoDbLib from "../../libs/dynamodb-lib";
import { success, failure } from "../../libs/response-lib";

export class CitiesRepository {
  /* istanbul ignore next Demo implementation. */
  // tslint:disable-next-line prefer-function-over-method (Demo implementation.)
 

  public exists(id: number): boolean {
    return true;
  }

  /* istanbul ignore next Demo implementation. */
  // tslint:disable-next-line prefer-function-over-method (Demo implementation.)
  public async getCity(id: string): City {
    const tableName = "dev-Cities";
    const params = {
      TableName: tableName,
      Key: {
        id: id
      }
    };
    try {
      const result = await dynamoDbLib.call("get", params);
      if (result.Item) {
        return success(result.Item);
      } else {
        return failure({ status: false, error: "Item not found." });
      }
    } catch (e) {
      return failure({ status: false });
    }

    
  }

  public async getAllCities(): City {
    const tableName = "dev-Cities";
    const params = {
      TableName: tableName,
      KeyConditionExpression: "id = :id"
    };
  
    try {
      const result = await dynamoDbLib.call("query", params);
      return success(result.Items);
    } catch (e) {
      return failure({ status: false });
    }
    
  }



  public async createCity(body:any) {
    const tableName = process.env.tableName;
    const params = {
      TableName: tableName,
      Item: body
    };
    try {
      console.log("repo function called",params)
      await dynamoDbLib.call("put", params);
      return success(params.Item);
    } catch (e) {
      console.log("test error",e)
      return failure({ status: false });
    }
  }

  /* istanbul ignore next Demo implementation. */
  // tslint:disable-next-line prefer-function-over-method (Demo implementation.)
  public hasAccess(id: number): boolean {
    return id !== 666;   // tslint:disable-line no-magic-numbers (Demo number.)
  }
}
