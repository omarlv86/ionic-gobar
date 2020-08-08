import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL} from '../../environments/urlApi';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http:HttpClient ) { }

  getBars(){
    return this.http.get(APIURL.bares);
  }
  
  getBar(id){
    return this.http.get(`${APIURL.bares}/${id}`);
  }
}
