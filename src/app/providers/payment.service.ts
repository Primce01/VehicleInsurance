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

  getPayment(insurance_id) {
    return this.firestore.collection('payments').doc(insurance_id).valueChanges();
  }
  
  
  async updatePayment(insurance: any) {
    if (!insurance.id) insurance.id = this.firestore.createId();
    const user = await this.authService.getUser().pipe(first()).toPromise();
    this.firestore.collection('payments').doc(insurance.id).set({ ...insurance, user_id: user.uid });
  }

deletePayment(insurance_id) {
  this.firestore.collection('payments').doc(insurance_id).delete();
}
}
