import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LicencefreqService {

  constructor(private http: HttpClient) { }

  getLicence(){
    return this.http.get('/assets/data/licence-freq.json')
  }
}
