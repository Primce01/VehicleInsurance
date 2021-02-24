import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsurancefreqService {


  constructor(private http: HttpClient) { }

  getFrequency(){
    return this.http.get('/assets/data/insurance-freq.json')
  }
}