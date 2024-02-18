import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(
    private http : HttpClient
  ) {}


  //returns data by random
  fetchData(): Observable<any> {
    return this.http.get('https://api.adviceslip.com/advice');
  }

  //returns data by Id

  fetchDataById(slipId : number) : Observable<any> {
    return this.http.get(`https://api.adviceslip.com/advice/${slipId}`);
  }
}


