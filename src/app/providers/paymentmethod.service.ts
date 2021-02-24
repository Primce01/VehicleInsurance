import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PaymentmethodService {

  constructor(private http: HttpClient) { }

  getMethods(){
    return this.http.get('/assets/data/payment-method.json')
  }
}