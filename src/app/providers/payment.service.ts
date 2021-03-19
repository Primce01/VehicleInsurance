import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  getPayment(invoice_id) {
    return this.firestore.collection('payments').doc(invoice_id).valueChanges();
  }

  async initPayment(payment) {
    console.log(payment)
    return await this.http.post('https://payments02.herokuapp.com/ecocash', payment).toPromise();
  }
}
