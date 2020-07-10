import { Component, OnInit } from '@angular/core';
import { Country } from '../../data/countries';
import { TravelService } from '../../service/travel.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries: Country[];

  constructor(
    private _travelService: TravelService
  ) { }

  ngOnInit() {
    this.countries = this._travelService.getCountries();
  }



}
