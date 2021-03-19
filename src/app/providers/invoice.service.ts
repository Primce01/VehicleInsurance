import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  vehicle_name: any;
  constructor(private firestore: AngularFirestore, private authService: AuthService) { }

  async addInvoice(items: any[]) {
    const id = this.firestore.createId();
    const user: any = await this.authService.getUser().pipe(first()).toPromise();
    if (user) {
      const invoice = { id, items, timestamp: new Date().getTime(), user_id: user.uid }
      await this.firestore.collection('invoices').doc(id).set(invoice);
      return invoice
    }
    return null;
  }

  getInvoices() {
    return this.firestore.collection('invoices').doc().valueChanges();
  }

  getInvoice(id) {
    return this.firestore.collection('invoices').doc(id).valueChanges();
  }
}
