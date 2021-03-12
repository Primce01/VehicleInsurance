import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  vehicle_name: any;
  constructor(private firestore: AngularFirestore) { }

  async addInvoice(items: any[]) {
    const id = this.firestore.createId();
    const invoice = { id, items, timestamp: new Date().getTime() }
    await this.firestore.collection('invoices').doc(id).set(invoice);
    return invoice
  }

  getInvoices() {
    return this.firestore.collection('invoices').doc().valueChanges();
  }

  getInvoice(id) {
    return this.firestore.collection('invoices').doc(id).valueChanges();
  }
}
