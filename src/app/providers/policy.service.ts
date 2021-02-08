import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private firestore: AngularFirestore) { }

  getPolices() {
    return this.firestore.collection("policies").valueChanges();
  }

  getPolicy(id: string) {
    return this.firestore.collection("policies").doc(id).valueChanges();
    
    
  }
}
