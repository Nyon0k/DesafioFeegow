import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BacklocalService {

  httpHeaders: object = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  apiURL = "http://localhost:8000/api/";

  constructor(private http:HttpClient) { }

  postSchedule(form:Observable<any>){
    return this.http.post(this.apiURL + 'schedule', form, this.httpHeaders);
  }

  getSpecialties(){
    return this.http.get(this.apiURL + 'getSpecialties', this.httpHeaders);
  }

  getProfessionals(especialidade_id){
    return this.http.get(this.apiURL + 'getProfessionals/' + especialidade_id, this.httpHeaders);
  }

  getSources(){
    return this.http.get(this.apiURL + 'getSources', this.httpHeaders);
  }
}
