import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  
  items: Observable<any[]>;
  constructor(
    private authService: AuthService,
    private firestore: AngularFirestore) { }

  getVehicles() {
    return this.authService.getUser().pipe(
      switchMap((user: any) => {
        return this.firestore.collection('vehicles', ref => ref.where('user_id', '==', user.uid)).valueChanges();
      })
    )
  }

  getVehicle(vehicle_id) {
    return this.firestore.collection('vehicles').doc(vehicle_id).valueChanges();
  }

  async updateVehicle(vehicle: any) {
    if (!vehicle.id) vehicle.id = this.firestore.createId();
    const user = await this.authService.getUser().pipe(first()).toPromise();
    this.firestore.collection('vehicles').doc(vehicle.id).set({ ...vehicle, user_id: user.uid });
  }

  deleteVehicle(vehicle_id) {
    this.firestore.collection('vehicles').doc(vehicle_id).delete();
  }
}