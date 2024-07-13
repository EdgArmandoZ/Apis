import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VodkaServiceService {

  private apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka';

  constructor(private http: HttpClient) { }

  obtenerCocteles(): Observable<any>{ 
    return this.http.get<any>(this.apiURL);
}
}
