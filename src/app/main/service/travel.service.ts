import { Injectable } from '@angular/core';

import countries  from "../../../assets/countries.json";
import { Country } from '../data/countries';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor() { }

  getCountries(): Country[]{
    return countries.countries;
  }

}
