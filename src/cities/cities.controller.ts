import { ApiCallback, ApiContext, ApiEvent, ApiHandler } from '../../shared/api.interfaces';
import { ResponseBuilder } from '../../shared/response-builder';
import { GetCityResult } from './cities.interfaces';
import { CitiesService } from './cities.service';

export class CitiesController {
  public constructor(private readonly _service: CitiesService) {
  }

  public getCity: ApiHandler = (event: ApiEvent, context: ApiContext, callback: ApiCallback): void => {
    try{
      var id= event.pathParameters.id;
    this._service.getCity(id)
    .then((result: GetCityResult) => {
      console.log(result);
      return ResponseBuilder.ok<GetCityResult>(result, callback);  // tslint:disable-line arrow-return-shorthand
    }).catch((err) => {
      console.log(err);
    })
    }
    catch(err){
      console.log(err);
    } 
  }

  public getAllCities: ApiHandler = (event: ApiEvent, context: ApiContext, callback: ApiCallback): void => {
    try{
    this._service.getAllCities()
    .then((result: GetCityResult) => {
      console.log(result);
      return ResponseBuilder.ok<GetCityResult>(result, callback);  // tslint:disable-line arrow-return-shorthand
    }).catch((err) => {
      console.log(err);
    })
    }
    catch(err){
      console.log(err);
    } 
  }

  public createCity: ApiHandler = (event: ApiEvent, context: ApiContext, callback: ApiCallback): void => {
    const data =JSON.parse(event.body);  
    this._service.createCity(data)
      .then((result: GetCityResult) => {
        console.log(result);
        return ResponseBuilder.ok<GetCityResult>(result, callback);  // tslint:disable-line arrow-return-shorthand
      }).catch((err) => {
        console.log(err);
      })
  }
}
