import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { countriesURL } from "./assets/config.json";


@Injectable()
export class ConfigService {
    configUrl = 'https://restcountries.eu/rest/v2/all';
    countryUrl = "https://restcountries.eu/rest/v2/name/";
    religionUrl = "https://restcountries.eu/rest/v2/region/";

    getConfig(countryName) {
      return this.http.get(this.countryUrl + countryName);
    }

    getConfigByReligion(region) {
        return this.http.get(this.countryUrl + region);
      }

  constructor(private http: HttpClient) { }

}