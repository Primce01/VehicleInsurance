import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  async addPayment(payment) {
    console.log(payment)
    return await this.http.post('https://payments02.herokuapp.com/ecocash', payment).toPromise();
  }
}
