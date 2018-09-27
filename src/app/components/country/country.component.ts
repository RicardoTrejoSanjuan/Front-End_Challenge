import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  // public countryList: Array<Country>;

  constructor(
    private _requestService: RequestService
  ) {
    
    // this.countryList = [
    //   new Country('mx', 'Mexico')
    // ];
   }

  ngOnInit() {
    this._requestService.getCountries().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
    // console.log(this.countryList);
  }

}
