import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyTestService {

  url :string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";
  constructor(private http:HttpClient) {}
  
  // get countries data
  allCountries(): Observable<any>{
    return this.http.get(this.url);
  }

}
