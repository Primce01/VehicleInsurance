import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService,
  ) { }

  getPayment(payment_id) {
    return this.firestore.collection('payments').doc(payment_id).valueChanges();
  }
  
  async updatePayment(payment: any) {
    if (!payment.id) payment.id = this.firestore.createId();
    const user = await this.authService.getUser().pipe(first()).toPromise();
    this.firestore.collection('payments').doc(payment.id).set({ ...payment, user_id: user.uid });
  }
}
