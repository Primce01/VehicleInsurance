import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first, switchMap } from 'rxjs/operators';
import { AuthService } from 'VehicleInsurance/src/app/providers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LicensesService {

  constructor(private firestore: AngularFirestore, private authService: AuthService) { }



  getLicenses() {
    return this.authService.getUser().pipe(
      switchMap((user: any) => {
        return this.firestore.collection('licenses', ref => ref.where('user_id', '==', user.uid)).valueChanges();
      })
    )
  }
  getLicense(invoice_id) {
    return this.firestore.collection('licenses').doc(invoice_id).valueChanges();
  }

  async updateLicense(license: any) {
    if (!license.id) license.id = this.firestore.createId();
    const user = await this.authService.getUser().pipe(first()).toPromise();
    this.firestore.collection('licenses').doc(license.id).set({ ...license, user_id: user.uid });
  }
}