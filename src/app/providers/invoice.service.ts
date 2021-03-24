import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

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
    return this.authService.getUser().pipe(
      switchMap((user: any) => {
        return this.firestore.collection('invoices', ref => ref.where('user_id', '==', user.uid)).valueChanges();
      })
    )
  }

  getInvoice(invoice_id) {
    return this.firestore.collection('invoices').doc(invoice_id).valueChanges();
  }

async updateInvoice(invoice: any) {
  if (!invoice.id) invoice.id = this.firestore.createId();
  const user = await this.authService.getUser().pipe(first()).toPromise();
  this.firestore.collection('invoices').doc(invoice.id).set({ ...invoice, user_id: user.uid });
}
}
