import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService,
  ) { }

  getInsurances() {
    return this.authService.getUser().pipe(
      switchMap((user: any) => {
        return this.firestore.collection('insurance', ref => ref.where('user_id', '==', user.uid)).valueChanges();
      })
    )
  }
getInsurance(insurance_id) {
  return this.firestore.collection('insurance').doc(insurance_id).valueChanges();
}

getVehicleInsurance(vehicle_id) {
  return this.firestore.collection('insurance', ref => ref.where('vehicle_id', '==', vehicle_id)).valueChanges();
}

async updateInsurance(insurance: any) {
  if (!insurance.id) insurance.id = this.firestore.createId();
  const user = await this.authService.getUser().pipe(first()).toPromise();
  this.firestore.collection('insurance').doc(insurance.id).set({ ...insurance, user_id: user.uid });
}

deleteInsurance(insurance_id) {
this.firestore.collection('insurance').doc(insurance_id).delete();
}
}