export interface City {
  id: string;
  name: string;
  subTowns: any;
  population: number;
}

export interface GetCityResult {
  city: City;
}
