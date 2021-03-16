import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeegowService {

  httpHeaders: object = {
    headers: {
      // 'Host': 'api.feegow.com/v1',
      'Content-Type': 'application/json',
      // 'Accept': 'application/json',
      'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOiIxNy0wOC0yMDE4IiwibGljZW5zZUlEIjoiMTA1In0.UnUQPWYchqzASfDpVUVyQY0BBW50tSQQfVilVuvFG38'
    }
  }

  apiURL = "https://api.feegow.com/v1/api/";

  constructor(private http:HttpClient) { }

  getDoctorsBySpecialty(especialidade_id){
    return this.http.get(this.apiURL + 'professional/list' + '?especialidade_id=' + especialidade_id, this.httpHeaders);
  }

  getSpecialties(){
    return this.http.get(this.apiURL + 'specialities/list', this.httpHeaders);
  }

  getSources(){
    return this.http.get(this.apiURL + 'pacient/list-sources', this.httpHeaders);
  }
}
