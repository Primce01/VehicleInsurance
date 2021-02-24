import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsurancetypeService {

  constructor(private http: HttpClient) { }

  getType(){
    return this.http.get('/assets/data/insurance-type.json')
  }
}